import MainLayout from 'common/components/layout/MainLayout'
import { NextPageWithLayout } from 'libs/next/type'
import { TableComponent } from 'pageComponents/Table'

const TablePage: NextPageWithLayout = () => {
	return (
		<div>
			<TableComponent />
		</div>
	)
}

TablePage.getLayout = MainLayout

export default TablePage
