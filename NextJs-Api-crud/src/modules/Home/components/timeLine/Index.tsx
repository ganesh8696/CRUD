import React from 'react'
import { SimpleGrid, Image, Stack, Text, GridItem } from '@chakra-ui/react'
import { timeLineData } from './mock'

export const TimeLineModule = () => {
	const textColor = ['#1E40AF', '#9D174D', '#854D0E', '#166534']
	const bgColor = ['#DBEAFE', '#FCE7F3', '#FEF9C3', '#DCFCE7']
	return (
		<Stack width="80%" mx="auto">
			<Image src="/static/assets/image/line.svg" position="relative" top="90px" zIndex="-1" />
			<SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>
				{timeLineData.map((item, key) => (
					<GridItem display="flex" flexDirection="column" alignItems="center" textAlign="center" key={item.id}>
						<Image boxSize="96px" mb="10" objectFit="cover" src={item.image} alt="First_Step" />
						<Text
							color={textColor[key]}
							bgColor={bgColor[key]}
							fontSize="12px"
							rounded="xl"
							px="3"
							py="1"
							fontFamily="poppins">
							{item.step}
						</Text>
						<Text
							fontSize="18px"
							fontWeight="600"
							mt="5"
							fontFamily="poppins"
							bgGradient="linear(to-l, #7928CA, #FF0080)"
							bgClip="text">
							{item.name}
						</Text>
						<Text mt="5" color="#6B7280" fontSize="16px" fontFamily="poppins">
							{item.description}
						</Text>
					</GridItem>
				))}
			</SimpleGrid>
		</Stack>
	)
}
