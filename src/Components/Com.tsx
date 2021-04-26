import React, { Component } from 'react'
import logo from '.././logo.svg';

export default class Com extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        <code>Main Site</code>
                    </p>
                </header>
            </div>
        )
    }
}
