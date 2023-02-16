import { ReactElement } from 'react'

const MainLayout = (page: ReactElement) => {
	return (
		<div>
			<main>{page}</main>
		</div>
	)
}

export default MainLayout
