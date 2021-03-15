import React, { Component } from "react";
import 'antd/dist/antd.css';
import { Menu } from "antd";


export default class navigation extends Component {
  constructor ( props ) {
    super ( props );
  }

  render () {
    return (
      <div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={ [ '2' ] }>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </div>
    );
  }
}