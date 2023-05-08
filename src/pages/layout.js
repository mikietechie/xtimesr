import { useState } from "react";
import Dashboard from "./dashboard";
import useBreakpoint from "../hooks/user-breakpoint";

export default function Layout() {
    const [sidenavOpen, setSidenavOpen] = useState(false)
    const size = useBreakpoint()
    const isMobile = (["xs", "sm", "md"]).includes(size)
    const mainClass = isMobile ? "col-12" : "col-xxl-10 col-lg-9"
    const asideClass = (isMobile ? "mobile-aside col-12  col-md-6" + (sidenavOpen ? "": " d-none ") : " col-xxl-2 col-lg-3 ") + " p-4 pe-0"
    const overlayClass = isMobile && sidenavOpen ? "overlay" : ""
    // const mainClass = (sidenavOpen && !isMobile ? "col-xxl-10 col-lg-9" : "col-12") + ""
    // const sidebarClass = " col-lg-3 col-md-4 col-sm-10 sidebar py-3 " + (sidenavOpen ? "" : "d-none") + (isMobile ? " mobile-sidebar " : "")
    // const asideClass = (sidenavOpen ? "col-xxl-2 col-lg-3 col-12 " : "") + + " p-4 pe-0"

    function toggleSidenav() {
        setSidenavOpen(!sidenavOpen)
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className={overlayClass} onClick={toggleSidenav}></div>
                <aside className={asideClass}>
                    <div className="sidebar">
                        <h1 className="sidebar-header">
                            <img src="https://via.placeholder.com/50" alt="logo" />
                            &nbsp;XtimesR
                        </h1>
                        <ul className='list-group'>
                            <li className="list-group-item active-link">
                                <a className="nav-link"><i className="fa fa-grip"></i>&nbsp;Dashboard</a>
                            </li>
                            <li className="list-group-item">
                                <a className="nav-link"><i className="fa fa-file-invoice"></i>&nbsp;Accounts</a>
                            </li>
                            <li className="list-group-item">
                                <a className="nav-link"><i className="fa fa-briefcase"></i>&nbsp;Portfolio</a>
                            </li>
                            <li className="list-group-item">
                                <a className="nav-link"><i className="fa fa-chart-line"></i>&nbsp;Investments</a>
                            </li>
                            <li className="list-group-item">
                                <a className="nav-link"><i className="fa fa fa-wave-square"></i>&nbsp;Activity</a>
                            </li>
                        </ul>
                        <hr />
                        <ul className='list-group'>
                            <li className="list-group-item">
                                <a className="nav-link"><i className="fa fa-question-circle"></i>&nbsp;Help Desk</a>
                            </li>
                            <li className="list-group-item">
                                <a className="nav-link"><i className="fa fa-gear"></i>&nbsp;Settings</a>
                            </li>
                            {
                                isMobile && (<li className="list-group-item">
                                    <a className="nav-link" onClick={toggleSidenav}><i className="fa fa-minimize"></i>&nbsp;Close</a>
                                </li>)
                            }
                        </ul>
                        <hr />
                        <div className="account-setup">
                            <div className="percentage-chart">
                                <span>80%</span>
                            </div>
                            <h6>Account Setup</h6>
                            <p>
                                Your account id 80% complete, please finish setup to unlock more
                            </p>
                            <div className="d-flex justify-content-start buttons">
                                <button className="btn btn-link dismiss">Complete</button>
                                <button className="btn btn-link  finish-setup">Finish Setup</button>
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between sidebar-footer">
                            <div className="d-flex justify-content-start">
                                <img src="https://via.placeholder.com/30" className="profile-pic" alt="profile" />
                                <div className="profile ms-3">
                                    <p className="mb-0">
                                    Kent Ryan
                                    </p>
                                    <p className="mb-0">
                                        <small>Investor</small>
                                    </p>
                                </div>
                            </div>
                            <a className="nav-link float-end"><i className="fa fa-sign-out"></i></a>
                        </div>
                    </div>
                </aside>
                <main className={mainClass}>
                    <header>
                        {
                            isMobile ? (
                                <nav className="vertical-center justify-content-between mobile-nav">
                                    <div className="vertical-center">
                                        <h1>XtimesR</h1>
                                    </div>
                                    <div className="vertical-center text-end">
                                    <button className="btn btn-link" onClick={toggleSidenav}><i className="fa fa-bars"></i></button>
                                    </div>
                                </nav>
                            ) : (
                                <nav className="vertical-center justify-content-between desktop-nav">
                                    <div className="vertical-center breadcrumbs">
                                        <a className=""><i className="fa fa-home"></i>&nbsp;<i className="fa fa-chevron-right"></i></a>
                                        <a className="">&nbsp;Dashboard&nbsp;<i className="fa fa-chevron-right"></i></a>
                                        <a className=" ">&nbsp;Overview</a>
                                    </div>
                                    <div className="profile vertical-center">
                                        <i className="fa fa-message"></i> &nbsp;
                                        Kent Ryan &nbsp;
                                        <img src="https://via.placeholder.com/30" alt="profile"/>
                                    </div>
                                </nav>
                            )
                        }
                    </header>
                    <Dashboard />
                </main>
            </div>
        </div>
    )
}