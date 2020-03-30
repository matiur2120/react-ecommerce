import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import {ButtonContainer} from './Button'
import styled from 'styled-components'


export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/" >
                    <img className="navbar-brand" src={logo} alt="Shop" />
                </Link>
                <ul className="navbar-nav align-item-center">
                    <li className="nav-item ml-5">
                        <Link className="nav-link" to="/">Product</Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <i className="fas fa-cart-plus mr-2" />
                            My Cart
                    </ButtonContainer>
                </Link>

            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        text-transform: capitalize;
        font-size: 1.3rem;
    }


`;
