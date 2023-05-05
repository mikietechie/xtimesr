import { DataCardsRow } from "./dashboard-components/cards";
import { DataTable } from "./dashboard-components/table";

export default function Dashboard() {
  return (
    <section id="dashboard-section">
      <div className="row">
        <div className="col-9">
          <h1 style={{fontSize: "32px"}}>Welcome back, Kent</h1>
          <p style={{fontSize: "16px"}}>Track, manage and forecast your investment and orders</p>
        </div>
        <div className="col-3">
          <div className="input-group mb-3 dashboard-search-input-group">
            <span className="input-group-text"><i className="fa fa-search"></i></span>
            <input type="text" className="form-control" placeholder="Search" />
          </div>
        </div>
      </div>
      <DataCardsRow />
      <DataTable />
    </section>
  )
}