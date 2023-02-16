import { ArrowBackIcon, ArrowForwardIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Popover, PopoverBody, PopoverContent, PopoverTrigger } from '@chakra-ui/react'
import { ComponentsHeading } from 'common/components/core/ComponentsHeading'
import React from 'react'

export const HeadingTopCollectionModule = () => {
	return (
		<div className="flex flex-row justify-between p-10">
			<div className="flex flex-row ">
				<ComponentsHeading heading={'Top collections'} description={'Discover the new creative economy'} />
				<span>
					<Popover>
						<PopoverTrigger>
							<Button
								color="#22C55E"
								backgroundColor="#fff"
								fontWeight="bold"
								fontSize="3xl"
								marginLeft="-9"
								marginTop=".5"
								colorScheme="whiteAlpha"
								fontFamily="Inter">
								last 24 hours
								<ChevronDownIcon />
							</Button>
						</PopoverTrigger>
						<PopoverContent bg="white">
							<PopoverBody className="flex flex-col rounded">
								<Button backgroundColor="#fff">last 24 hours</Button>
								<Button backgroundColor="#fff">last 7 days</Button>
								<Button backgroundColor="#fff">last 7 days</Button>
							</PopoverBody>
						</PopoverContent>
					</Popover>
				</span>
			</div>
			<div>
				<Button h="40px" w="40px" size="xl" borderRadius="full">
					<ArrowBackIcon />
				</Button>
				<Button h="40px" w="40px" marginLeft="2" size="xl" borderRadius="full">
					<ArrowForwardIcon />
				</Button>
			</div>
		</div>
	)
}
