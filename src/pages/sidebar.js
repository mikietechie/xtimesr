
import { React, useContext, useState } from 'react';
import useBreakpoint from '../hooks/user-breakpoint'


export function Sidebar() {
    const [sidenavOpen, setSidenavOpen] = useState(true)
    const size = useBreakpoint()
    const isMobile = (["xs", "sm", "md"]).includes(size)
    const sidebarClass = "col-2 sidebar py-3" + (sidenavOpen ? "" : "d-none") + (isMobile ? " mobile-sidebar " : "")
    return (
        <aside className={sidebarClass}>
            <div className="sidebar-inner bg-white box-bd p-3">
                <hr />
                <h1 className="text-center mb-3"><img src="/logo512.png" alt="" className="logo" />&nbsp;Aone</h1>
                <hr />
                {/* <p className="text-center text-secondary">Hi Mike {String(isMobile)}</p>
                <hr /> */}
                <ul className="list-group">
                    {isMobile && sidenavOpen && (<li className="list-group-item">
                        <a to="#" className="nav-link" onClick={() => setSidenavOpen(!sidenavOpen)}><i className="fa fa-arrow-left"></i>&nbsp;Close Menu</a>
                    </li>)}
                    <li className="list-group-item">
                        <a to="/admin" className="nav-link"><i className="fa fa-dashboard"></i>&nbsp;Dashboard</a>
                    </li>
                    <li className="list-group-item">
                        <a to="#" className="nav-link"><i className="fa fa-list"></i>&nbsp;Modules <i className="float-end fa fa-caret-down"></i></a>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <a to="/admin" className="nav-link"><i className="fa fa-dashboard"></i>&nbsp;Inner</a>
                            </li>
                            <li className="list-group-item">
                                <a to="/admin" className="nav-link"><i className="fa fa-dashboard"></i>&nbsp;Inner</a>
                            </li>
                            <li className="list-group-item">
                                <a to="/admin" className="nav-link"><i className="fa fa-dashboard"></i>&nbsp;Inner</a>
                            </li>
                            <li className="list-group-item">
                                <a to="#" className="nav-link"><i className="fa fa-dashboard"></i>&nbsp;Inner</a>
                                <ul className="list-group">
                                <li className="list-group-item">
                                    <a to="/admin" className="nav-link"><i className="fa fa-dashboard"></i>&nbsp;Deep Inner</a>
                                </li>
                                <li className="list-group-item">
                                    <a to="/admin" className="nav-link"><i className="fa fa-dashboard"></i>&nbsp;Deep Inner</a>
                                </li>
                                <li className="list-group-item">
                                    <a to="/admin" className="nav-link"><i className="fa fa-dashboard"></i>&nbsp;Deep Inner</a>
                                </li>
                                <li className="list-group-item">
                                    <a to="/admin" className="nav-link"><i className="fa fa-dashboard"></i>&nbsp;Deep Inner</a>
                                </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="list-group-item">
                        <a to="/admin/users" className="nav-link"><i className="fa fa-user-group"></i>&nbsp;Users</a>
                    </li>
                </ul>
                <hr />
                <ul className='list-group'>
                    <li className="list-group-item">
                        <a to="/admin/settings" className="nav-link"><i className="fa fa-gear"></i>&nbsp;Settings</a>
                    </li>
                    <li className="list-group-item">
                        <a to="/logout" className="nav-link"><i className="fa fa-sign-out"></i>&nbsp;Logout</a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}