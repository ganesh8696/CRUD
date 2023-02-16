import React from 'react'
import { Box, Flex, Image, Text, AvatarGroup, Avatar, HStack } from '@chakra-ui/react'
import { nftcardvideo } from './mock'
export const NftCardVideoModule = () => {
	return (
		<>
			<HStack spacing="30px" width="80%" mx="auto" py="12">
				{nftcardvideo.map((item) => (
					<Box overflow="hidden" key={item.id} maxW="400px">
						<Image borderRadius="3xl" src={item.image} />
						<Box p="5">
							<Flex justify="space-between">
								<Text fontSize="18px" fontWeight="600" fontFamily="poppins">
									{item.name}
								</Text>
								<AvatarGroup size="sm" max={3}>
									{item.avatar.map((i) => (
										<Avatar name={i.avatarname} src={i.avatarimage} key={i.id} fontFamily="poppins" />
									))}
								</AvatarGroup>
							</Flex>
							<Flex justify="space-between" mt="1.5" align="center">
								<Box>
									<Text
										fontSize="12px"
										color="#6B7280"
										bgColor="#fff"
										position="relative"
										top="2px"
										left="8px"
										w="fit-content"
										px="1"
										fontFamily="poppins">
										{item.pricename}
									</Text>
									<Text
										fontSize="16px"
										fontWeight="600"
										color="#22C55E"
										border="2px"
										borderColor="#22C55E"
										px="2.5"
										py="1.25"
										rounded="lg"
										fontFamily="poppins">
										{item.priceValue}
									</Text>
								</Box>
								<Box>
									<Text fontSize="12px" color="#6B7280" fontFamily="poppins">
										{item.remainingtime}
									</Text>
									<Text fontSize="16px" fontWeight="600" fontFamily="poppins">
										{item.time}
									</Text>
								</Box>
							</Flex>
						</Box>
					</Box>
				))}
			</HStack>
		</>
	)
}
