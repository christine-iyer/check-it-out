
import "bootstrap/dist/css/bootstrap.min.css";


export default function Table(props) {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
        <th>index</th>
          <th>class</th>
          <th>prodInventoryName</th>
          <th>detail</th>
          <th>prodX</th>
          <th>unitMeas</th>
          <th>unitNow</th>
          <th>unitCost</th>
          <th>cost</th>
          <th>recipes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>{props.index}</td>
          <td>{props.class}</td>
          <td>{props.prodInventoryName}</td>
          <td>{props.detail}</td>
          <td>{props.prodX}</td>
          <td>{props.unitMeas}</td>
          <td>{props.unitNow}</td>
          <td>{props.unitCost}</td>
          <td>{props.cost}</td>
          <td>{props.recipes}</td>
        </tr>
        
      </tbody>
    </Table>
  );
}

