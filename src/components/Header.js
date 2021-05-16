import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';

const Header = (props) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to='/dashboard' activeClassName="is-active"> Dashboard Page</NavLink>
        <br /><NavLink to='/create' activeClassName="is-active"> Add Expense Page</NavLink>
        <button onClick={() => {
            props.dispatch(startLogout())
        }}>LogOut</button>
    </header>
);

export default connect()(Header);
