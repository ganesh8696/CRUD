import MainLayout from 'common/components/layout/MainLayout'
import { NextPageWithLayout } from 'libs/next/type'
import UpdateFormModule from 'modules/updateForm'

const UpdateFromPage: NextPageWithLayout = () => {
	return (
		<div>
			<UpdateFormModule />
		</div>
	)
}

UpdateFromPage.getLayout = MainLayout

export default UpdateFromPage
