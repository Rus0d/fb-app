import React from 'react';
import {NavLink} from 'react-router-dom';

// Using "Stateless Functional Components"
export default function (props) {
    return (
        <div className="app">
            <header className="primary-header"></header>
            <aside className="primary-aside">
                <ul>
                    <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/users" activeClassName="active">Users</NavLink></li>
                    <li><NavLink to="/widgets" activeClassName="active">Widgets</NavLink></li>
                </ul>
            </aside>
            <main>
                {props.children}
            </main>
        </div>
    );
}
