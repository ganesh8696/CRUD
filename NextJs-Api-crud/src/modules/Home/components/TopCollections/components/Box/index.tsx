import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const BoxTopCollectionModule = (props: any) => {
	const { bgImage, avatar, verified, boxImg1, boxImg2, boxImg3 } = props
	return (
		<div className="p-10">
			<Box
				className="flex items-end "
				maxW="sm"
				borderWidth="1px"
				borderRadius="2xl"
				overflow="hidden"
				height="80"
				boxSize="400"
				position="relative"
				backgroundImage={bgImage}>
				<div className="h-full w-full absolute bg-gradient-to-t from-[#000] to-transparent" />
				<div className=" py-1 z-20">
					<span className="flex flex-row justify-self-center self-center  ">
						<Image boxSize="8" src={avatar} alt="logo" borderRadius="full" marginLeft="5" marginRight="2" />
						<Text color="white">by Jane cooper</Text>
						<Image src={verified} alt="logo" boxSize="4" marginTop="1.5" marginLeft="1" />
					</span>
					<span className="flex  justify-self-center self-center ">
						<Text color="white" fontSize="3xl" fontWeight="bold" marginLeft="5">
							Awesome collection
						</Text>
					</span>
					<div className="flex  justify-evenly p-3 ">
						<span className=" p-2">
							<Box maxW="sm" maxH="sm" border=".5px" objectFit="cover" borderRadius="lg" overflow="hidden">
								<Image src={boxImg1} alt="img" />
							</Box>
						</span>
						<span className="p-2">
							<Box maxW="sm" maxH="sm" border=".5px" objectFit="cover" borderRadius="lg" overflow="hidden">
								<Image src={boxImg2} alt="img" />
							</Box>
						</span>
						<span className=" p-2">
							<Box maxW="sm" maxH="sm" border=".5px" objectFit="cover" borderRadius="lg" overflow="hidden">
								<Image src={boxImg3} alt="img" />
							</Box>
						</span>
					</div>
				</div>
			</Box>
		</div>
	)
}
// style =
// 	'transition: transform 0ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s; width: 2093.33px; transform: translate3d(0px, 0px, 0px);'

// <Button
// 	backgroundImage={staticImages.topCollection1}
// 	colorScheme={staticImages.topCollection1}
// 	borderWidth="thin"
// 	borderColor="black"
// 	padding="190">
// 	<Button backgroundColor={staticImages.boxImg1} padding="20"></Button>
// </Button> 				bgGradient="linear-gradient(45deg, black, transparent)">
