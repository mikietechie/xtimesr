import Dashboard from "./dashboard";

export default function Layout() {
    return (
        <div className="container-fluid">
            <div className="row">
                <aside className="col-2 p-3">
                    <div className="sidebar">
                    
                    </div>
                </aside>
                <main className="col-10">
                    <header>
                        <nav className="d-flex justify-content-between">
                            <div className="d-flex breadcrumbs">
                                <a className=""><i className="fa fa-home"></i>&nbsp;<i className="fa fa-chevron-right"></i></a>
                                <a className="">&nbsp;Dashboard&nbsp;<i className="fa fa-chevron-right"></i></a>
                                <a className=" ">&nbsp;Overview</a>
                            </div>
                            <div className="profile d-flex">
                                <i className="fa fa-message"></i> &nbsp;
                                Kent Ryan &nbsp;
                                <img src="https://via.placeholder.com/30" alt="profile" />
                            </div>
                        </nav>
                    </header>
                    <Dashboard />
                </main>
            </div>
        </div>
    )
}