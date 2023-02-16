import { HStack } from '@chakra-ui/react'
import React from 'react'
import { BoxTopCollectionModule, HeadingTopCollectionModule } from './components'
import { topCollectionCards } from './mock'

export const TopCollectionModule = () => {
	return (
		<div>
			<HeadingTopCollectionModule />
			<HStack overflowX="scroll">
				{topCollectionCards.map((item) => (
					<BoxTopCollectionModule key={item.id} maxW="400px" {...item} />
				))}
			</HStack>
		</div>
	)
}
