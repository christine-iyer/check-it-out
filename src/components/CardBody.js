export default function CardBody(props) {
	console.log('this is props:', props);
	return (
		<div className="card-body">
			<h5 className="card-blogHeader">
				{props.unitCost} / {props.unitMeas}
			</h5>
		</div>
	);
}
