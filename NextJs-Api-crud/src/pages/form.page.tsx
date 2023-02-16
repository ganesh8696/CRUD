import MainLayout from 'common/components/layout/MainLayout'
import { NextPageWithLayout } from 'libs/next/type'
import { FormComponent } from 'pageComponents/Form'

const FromPage: NextPageWithLayout = () => {
	return (
		<div>
			<FormComponent />
		</div>
	)
}

FromPage.getLayout = MainLayout

export default FromPage
