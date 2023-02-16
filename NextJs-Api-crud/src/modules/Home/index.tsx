import { Button, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import styles from './styles.module.css'

export const HomeModule = () => {
	const router = useRouter()
	return (
		<>
			<div className={styles.container}>
				<div className={styles.content}>
					<Text color={'white'} className={styles.text}>
						CRUD APP
					</Text>
					<Button onClick={() => router.push('/form')} color={'white'} backgroundColor={'orange'}>
						Click Me
					</Button>
				</div>
			</div>
		</>
	)
}
