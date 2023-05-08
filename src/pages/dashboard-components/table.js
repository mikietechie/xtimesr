import './table.scss';
import useBreakpoint from "../../hooks/user-breakpoint";


export function DataTable() {
    const size = useBreakpoint()
    const fullTable = !(["xs", "sm"]).includes(size)

    const date = new Date()
    const tableItems = [
        {date, type: "Deposit", amount: 100.00, status: "Pending", fees: 0.00},
        {date, type: "Deposit", amount: 100.00, status: "Complete", fees: 0.00},
        {date, type: "Deposit", amount: 100.00, status: "Complete", fees: 0.00},
        {date, type: "Deposit", amount: 100.00, status: "Complete", fees: 0.00},
        {date, type: "Deposit", amount: 100.00, status: "Complete", fees: 0.00},
    ]

    return (
        <div className="row data-table-component">
            <div className="col-12">
                <div className="d-flex justify-content-between">
                    <h2>Recent Transactions</h2>
                    <div className="d-flex">
                        <button className="btn-bnw btn btn-sm mx-1"><i className='fa fa-download'></i> Download</button>
                        <button className="btn-bnw btn btn-sm d-sm-none d-md-block">View Reports</button>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <div className='btn-group'>
                            <button className="btn btn-sm btn-light btn-bnw">View All</button>
                            <button className="btn btn-sm btn-light btn-bnw">Internal</button>
                            <button className="btn btn-sm btn-light btn-bnw">Withdrawals</button>
                        </div>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Transaction Date <i className='fa fa-chevron-down'></i></th>
                                { fullTable && <th scope="col">Type <i className='fa fa-chevron-down'></i></th>}
                                <th scope="col">Amount <i className='fa fa-chevron-down'></i></th>
                                { fullTable && <th scope="col">Fees <i className='fa fa-chevron-down'></i></th>}
                                <th scope="col">Status <i className='fa fa-chevron-down'></i></th>
                                { fullTable && <th scope="col"></th>}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableItems.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.date.toLocaleString("en-GB")}</td>
                                            {fullTable && <td>{item.type}</td>}
                                            <td>{item.amount}</td>
                                            {fullTable && <td>{item.fees.toFixed(2)}</td>}
                                            <td>{
                                                item.status === "Pending" ?
                                                    <span className="badge text-warning">{item.status}</span> :
                                                    <span className="badge text-success">{item.status}</span>
                                            }</td>
                                            {fullTable && <td>
                                                <button className="btn btn-link">
                                                    <i className="fa fa-ellipsis"></i>
                                                </button>
                                            </td>}
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="d-flex justify-content-lg-end justify-content-center">
                    <div className="d-flex">
                        <ul className="pagination">
                            <li className="page-item"><button className="page-link"><i className='fa fa-chevron-left'></i></button></li>
                            <li className="page-item"><button className="page-link">1</button></li>
                            <li className="page-item"><button className="page-link">2</button></li>
                            <li className="page-item"><button className="page-link">3</button></li>
                            <li className="page-item"><button className="page-link">4</button></li>
                            <li className="page-item"><button className="page-link">5</button></li>
                            <li className="page-item"><button className="page-link"><i className='fa fa-chevron-right'></i></button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
