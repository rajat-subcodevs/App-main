import React, { Component } from 'react'


export interface State {
    data:any
}

export interface Props {
    
}

export default class Com2 extends Component <Props, State>{
    constructor(props : Props) {
        super(props)
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    data: res
                })
            })
            .catch(error => {
                alert("error while calling API")
                console.log(error)
            })
    }
    render() {
        console.log(this.state.data);
        return (
            <div>
                <header className="App-header">
                    <p>
                        <code>Main site route 2</code>
                    </p>
                    <div>Data from API</div>
                    <table>
                        {this.state.data && this.state.data.map((item:any, i:any) => {
                            return (
                                <div>
                                <tr key={i} style={{ float: "left" }}>name - {item.name}</tr></div>
                            )
                        })}
                    </table>
                </header>
            </div>
        )
    }
}
