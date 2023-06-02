import "./PropertyStatus.scss";
const STATUSES = [
  "Awaiting Bank Processing",
  "Payment Processed",
  "Expired: No Payment Received",
];

const COLORS = ["#FFD056", "#75C282", "#F17E7E"];

export const PropertyStatus = (status) => {
  <div className="property-status">
    <div className="property-status__text">{STATUSES[status]}</div>
    <div
      className="property-status__icon"
      style={{ backgroundColor: COLORS[status] }}
    ></div>
  </div>;
};
