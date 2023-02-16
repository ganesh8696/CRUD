import { Box, Button, Image, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import { ComponentsHeading } from 'common/components/core/ComponentsHeading'
import React from 'react'
import { staticImages } from 'configs/constants/images'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import styles from './styles.module.css'

export const DropModule = () => {
	return (
		<div className={styles.container}>
			<div className={styles.container1}>
				<div>
					<ComponentsHeading
						heading={'Never miss a drop!'}
						description={'Subcribe to our super-exclusive drop list and be the first to know abour upcoming drops'}
					/>
				</div>
				<div className="flex flex-col justify-self-auto content-center mt-10">
					<div className="flex flex-row ">
						<Box
							color="#1E40AF"
							borderRadius="full"
							backgroundColor="#E0F2FE"
							className="flex py-1 pb-1 p-3 justify-self-center align-center">
							01
						</Box>
						<Text className="ml-2 ">Get more discount</Text>
					</div>
					<div className="flex flex-row mt-3 ">
						<Box
							color="#9D174D"
							borderRadius="full"
							backgroundColor="#FCE7F3"
							className="flex py-1 pb-1 p-3 justify-self-center align-center">
							02
						</Box>
						<Text className="ml-2 ">Get premium magazines</Text>
					</div>
				</div>
				<div className={styles.input}>
					<InputGroup className="s-md  mt-10 ">
						<Input placeholder="enter your email" borderRadius="full" />
						<InputRightElement width="4.5rem">
							<Button h="30px" w="30px" marginLeft="8" backgroundColor="#0EA5E9" size="xl" borderRadius="full">
								<ArrowForwardIcon color="white" />
							</Button>
						</InputRightElement>
					</InputGroup>
				</div>
			</div>
			<div className={styles.container2}>
				<Image src={staticImages.image} alt="img" marginTop="10" />
			</div>
		</div>
	)
}
