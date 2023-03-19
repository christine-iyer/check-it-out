import './App.css';

// import Nav from './Nav';
// import Footer from './Footer';
// import Article from './Article';
import Item from './components/Item';
import cardsArr from './Data';
import Table from './components/Table'

const cards = cardsArr.map((ele, idx) => {
	return (
		<Item
		{...ele}
			key={idx}
			// class={ele.class}
			// prodInventoryName={ele.prodInventoryName}
			// detail={ele.detail}
			// prodX={ele.prodX}
			// unitMeas={ele.unitMeas}
			// unitNow={ele.unitNow}
			// unitCost={ele.unitCost}
			// cost={ele.cost}
			// recipes={ele.recipes}
		/>
	);
});

// console.log(cards);

export default function App() {
	return (
		<div className="App">
			<Table>{cards}</Table>
		</div>
	);
}
