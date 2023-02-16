import { Heading, Text } from '@chakra-ui/react'
import React from 'react'

export const ComponentsHeading = ({ heading, description }: any) => {
	return (
		<div className="flex flex-col gap-2">
			<div>
				<Heading fontWeight="bold" size="xl" fontFamily="Inter">
					{heading}
				</Heading>
			</div>
			<div className="w-40% text-xl">
				<Text color="#9CA3AF">{description}</Text>
			</div>
		</div>
	)
}
