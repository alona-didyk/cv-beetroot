import { Counter } from "../Counter/Counter";
import "./DataTable.scss";
import { PropertyStatus } from "./PropertyStatus/PropertyStatus";

const data = [
  {
    property: "771 Lost Round",
    data: new Date(),
    rent: 3000,
    deposit: 9000,
    status: 0,
  },
  {
    property: "1491 Jagged Arbor",
    data: new Date(),
    rent: 2700,
    deposit: 7500,
    status: 1,
  },
  {
    property: null,
    data: new Date(),
    rent: 3000,
    deposit: 9000,
    status: 0,
  },
];

export const DataTable = () => {
  return (
    <div className="data-table">
      <div className="data-table__header">
        <h3 className="data-table__lable">Active Deposits</h3>
        <Counter value={2}></Counter>
      </div>
      <table>
        <tr className="data-table__head">
          <th>PROPERTY</th>
          <th>MOVE IN DATE</th>
          <th>RENT</th>
          <th>DEPOSIT</th>
        </tr>

        {data.map(({ property, data, rent, deposit, status }) => (
          <tr className="data-table__row">
            <td>{property}</td>
            <td>{new Date(data).toLocaleString()}</td>
            <td>${rent}</td>
            <td>${deposit}</td>
            <td>
              <PropertyStatus status={status}/>
            </td>
          </tr>
        ))}

        <tr className="data-table__row">
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr className="data-table__row">
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table>
    </div>
  );
};
