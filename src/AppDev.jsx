import React, {Component} from 'react';
import './css/App.css';
import HelloWorld from "./components/HelloWorld";
import GetWork from "./components/getWork";
import SomeGame from "./components/someGame";

export default class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            project: [],
        };
    }

    render() {
        const { project } = this.state;
        return(
            <div className="App">
                <header className="App-header">
                    <HelloWorld/>
                    <GetWork
                        time={ 100 }
                    />
                    <SomeGame/>
                </header>
            </div>
        );
    }
}
