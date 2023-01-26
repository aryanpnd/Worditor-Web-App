import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand text-warning" to="/">{props.title}</Link>

                    <div>
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>

                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />

                        <label className={`form-check-label` }htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'dark':'light'} Mode</label>

                    </div>
                </div>
            </nav>
        </>
    )
}
