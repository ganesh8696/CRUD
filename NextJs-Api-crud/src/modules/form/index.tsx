import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import api from 'modules/api'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styles from './styles.module.css'

export default function FormModule() {
	const router = useRouter()
	const [value, setvalue] = useState({
		name: '',
		age: '',
	})
	const handleSubmit = async () => {
		const newList = [
			{
				name: value.name,
				age: value.age,
			},
		]
		await api.post('/person', newList)
		router.push('/table')
	}
	const handleChangeName = (e: any) => {
		setvalue({ ...value, name: e.target.value })
	}
	const handleChangeAge = (e: any) => {
		setvalue({ ...value, age: e.target.value })
	}
	return (
		<>
			<div className={styles.container}>
				<Formik onSubmit={handleSubmit} initialValues={{ name: '' }} className={styles.content}>
					<Form>
						<FormControl backgroundColor={'gray'} padding={'40px'} borderRadius={'2xl'}>
							<div className={styles.div}>
								<FormLabel color={'white'}>Name :</FormLabel>
								<Input
									backgroundColor={'white'}
									onChange={handleChangeName}
									placeholder="Enter your name"
									size="md"
									width="auto"
								/>
							</div>
							<div className={styles.div2}>
								<FormLabel color={'white'}>Age :</FormLabel>
								<Input
									backgroundColor={'white'}
									onChange={handleChangeAge}
									placeholder="Enter your age"
									size="md"
									width="auto"
								/>
							</div>
							<Button mt={4} colorScheme="orange" width="360px" type="submit">
								Submit
							</Button>
						</FormControl>
					</Form>
				</Formik>
			</div>
		</>
	)
}
