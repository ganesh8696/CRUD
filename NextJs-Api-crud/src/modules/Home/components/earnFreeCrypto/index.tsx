import { Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { staticImages } from 'configs/constants/images'
import styles from './styles.module.css'

export const EarnFreeCryptoModule = () => {
	return (
		<div className={styles.container}>
			<div className={styles.container1}>
				<div>
					<Image src={staticImages.logo} alt="logo" marginBottom="10" />
				</div>
				<div>
					<Heading fontSize="6xl" size="xl">
						Earn free crypto with Ciscrypt
					</Heading>
					<Text className="mt-10">A creative agency that lead and inspire</Text>
				</div>
				<div className="flex flex-row mt-10">
					<Button borderRadius="full" backgroundColor="#0284C7" color="#F0F9FF" colorScheme="blue">
						Create item
					</Button>
					<Button borderRadius="full" marginLeft="3">
						Discover more
					</Button>
				</div>
			</div>
			<div className={styles.container2}>
				<Image src={staticImages.image1} alt="img" marginTop="10" />
			</div>
		</div>
	)
}
