import './App.css';
//import Item from './components/Item';
import data from './data';
import columns from './columns';
import DataTable from 'react-data-table-component';

// const cards = cardsArr.map((ele, idx) => {
// 	return (
// 		<Item
// 			{...ele}
// 			key={idx}
// 		/>
// 	);
// });

export default function App() {
	return (
		<div className="App">
			<DataTable
			columns={columns}
			data={data} />
		</div>
	);
}
