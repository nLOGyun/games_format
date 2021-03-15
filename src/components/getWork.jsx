import { DatePicker, Input } from "antd";
import React, {Component} from "react";

export default class GetWork extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const { time } = this.props;
        return (
            <div>
                <DatePicker/>
                <Input defaultValue={time}/>
            </div>
        );
    }

}