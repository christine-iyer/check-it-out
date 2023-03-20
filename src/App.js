import './App.css';
//import Item from './components/Item';
import React from 'react';
import data from './data';
import columns from './columns';
import DataTable from 'react-data-table-component';
import { customSort, customStyles, conditionalRowStyles, resetPaginationToggle } from 'lodash'

export default function App() {
	const [selectedRows, setSelectedRows] = React.useState(false);
	const [toggledClearRows, setToggleClearRows] = React.useState(false);

	const handleChange = ({ selectedRows }) => {
		setSelectedRows(selectedRows);
	};
	const handleClearRows = () => {
		setToggleClearRows(!toggledClearRows);
	}
	return (
		<div className="App">
			<button onClick={handleClearRows}>
				Clear Selected Rows
			</button>
			<DataTable
				columns={columns}
				data={data}
				pagination
				selectableRows={selectedRows}
				customStyles={customStyles}
				conditionalRowStyles={conditionalRowStyles}
				paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1

				dense
				theme="dark"
				onSelectedRowsChange={handleChange}
				sortFunction={customSort}
				clearSelectedRows={toggledClearRows}

			/>
		</div>
	);
}
