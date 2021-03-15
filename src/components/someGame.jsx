import React, { Component } from "react";

export default class someGames extends Component{
    constructor( props ) {
        super(props);
    }
    changeRouter(){
        window.open('/BoxGame', 'self')
    }
    render() {
        return (
            <div onClick={ this.changeRouter.bind( this ) } > Box </div>
        );
    }
}