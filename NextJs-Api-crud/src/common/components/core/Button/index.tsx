import { Button, ButtonProps } from '@chakra-ui/react'

enum GetColorBasedVarient {
	solid = '#fff',
	link = 'brand.600',
}

interface PropsData extends ButtonProps {
	name: string
}

export const AppButton = ({ name, ...props }: PropsData) => {
	const variant = props?.variant
	return (
		<Button
			textTransform="capitalize"
			size="lg"
			width="full"
			maxW="fit-content"
			color={variant === 'link' ? 'brand.600' : 'white'}
			colorScheme="blue"
			sx={{
				borderRadius: '25px',
			}}
			{...props}>
			{name}
		</Button>
	)
}
