import React, { Component } from 'react'
import logo from './logo.png';

const Header = () => {
    return (
        <nav aria-label="breadcrumb default-color">
            <ol className="breadcrumb">
                <img src={logo} className="logo" alt="Responsive image" />
            </ol>
        </nav>
    )
}

export default Header;