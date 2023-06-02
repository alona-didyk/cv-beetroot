import "./App.scss";
import { DataTable } from "./components/DataTable/DataTable";
import { Header } from "./components/Header/Header";
import { Aside } from "./components/Aside/Aside";

function App() {
  return (
    <>
    <Aside items={['Home', 'Deposits', 'Offers', 'Payments', 'Settings']}></Aside>
    <Header></Header>
      <DataTable></DataTable>
    </>
  );
}

export default App;
