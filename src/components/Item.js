import CardBody from './CardBody';
import CardImage from './CardImage';

//create the component
export default function Item(props) {
	return (
		<div className="card" style={{ width: '18rem' }}>
			<CardImage detail={props.detail} prodInventoryName={props.prodInventoryName} />
			<CardBody unitCost={props.unitCost} unitMeas={props.unitMeas} />
		</div>
	);
}
