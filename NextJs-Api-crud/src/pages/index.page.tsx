import MainLayout from 'common/components/layout/MainLayout'
import { NextPageWithLayout } from 'libs/next/type'

import { Home } from 'pageComponents/Home'

const HomePage: NextPageWithLayout = () => {
	return (
		<div>
			<Home />
		</div>
	)
}

HomePage.getLayout = MainLayout

export default HomePage
