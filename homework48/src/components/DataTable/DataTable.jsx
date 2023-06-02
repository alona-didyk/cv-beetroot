import { Counter } from "../Counter/Counter";
import "./DataTable.scss";

export const DataTable = () => {
  return (
    <div className="data-table">
      <div className="data-table__header">
        <h3 className="data-table__lable">Active Deposits</h3>{" "}
        <Counter value={2}></Counter>
      </div>
    </div>
  );
};
