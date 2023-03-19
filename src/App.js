import './App.css';

// import Nav from './Nav';
// import Footer from './Footer';
// import Article from './Article';
import Item from './components/Item';
import cardsArr from './Data';
import { Card } from 'react-bootstrap';


const cards = cardsArr.map((ele, idx) => {
	return (
		<Item
		{...ele}
			key={idx}
		/>
	);
});

// console.log(cards);

export default function App() {
	return (
		<div className="App">
			<>{cards}</>
		</div>
	);
}
