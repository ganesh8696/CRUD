import { Button, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import api from 'modules/api'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

export default function TableModule() {
	const list = [
		{
			id: 1,
			name: 'name',
			age: 0,
		},
	]
	const [value, setValue] = useState(list)
	const router = useRouter()
	const fetchData = async () => {
		const response = await api.get('/person')
		return response.data
	}
	const handleDelete = async (id: number) => {
		await api.delete(`/person/${id}`)
		const deleteList = value.filter((list) => list.id !== id) // for showing balance data
		setValue(deleteList)
	}
	useEffect(() => {
		const getValue = async () => {
			const allValue = await fetchData()
			if (allValue) setValue(allValue)
		}
		getValue()
	}, [])

	return (
		<>
			<div className={styles.container}>
				<TableContainer width={'80%'} borderRadius={'10px'} overflowY={'scroll'} backgroundColor={'white'}>
					<Table variant="simple">
						<TableCaption>User Entered Data</TableCaption>
						<Thead>
							<Tr>
								<Th textAlign={'center'} width={'33.3%'}>
									Name
								</Th>
								<Th textAlign={'center'} width={'33.3%'}>
									Age
								</Th>
								<Th textAlign={'center'} width={'33.3%'}>
									Action
								</Th>
							</Tr>
						</Thead>
						{value?.map((i) => (
							<Tbody key={i.id}>
								<Tr>
									<Td textAlign={'center'}>{i.name}</Td>
									<Td textAlign={'center'}>{i.age}</Td>
									<Td className="flex flex-row justify-center " gap={'0.5rem'} alignItems={'center'}>
										<Button
											width={'100px'}
											colorScheme="orange"
											className="mb-3"
											onClick={() => router.push(`/table/${i.id}`)}
											// onClick={() => router.push({ pathname: `/table/${i.id}`, query: { ...i } })} for sending props to next page it only send the value on navigate when reload it will not show the data again
										>
											Edit
										</Button>
										<Button width={'100px'} colorScheme="orange" className="mb-3" onClick={() => handleDelete(i.id)}>
											Delete
										</Button>
									</Td>
								</Tr>
							</Tbody>
						))}
					</Table>
				</TableContainer>
			</div>
		</>
	)
}
