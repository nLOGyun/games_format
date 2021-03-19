import React, { Component } from "react";
import { Layout } from 'antd';

export default class layout2 extends Component {
  constructor ( props ) {
    super ( props );
    this.state = { }
  }

  render () {
    return (
      <Layout>
        <img src='https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2820330161,1234673333&fm=26&gp=0.jpg'/>
      </Layout>
    );
  }
}