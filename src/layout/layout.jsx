import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import '../css/Box/style.css';
import 'antd/dist/antd.css';
import '../css/layout/layout.css'
import Mavigation from "./navigation";
import Layout1 from './layout1';
import Layout2 from './layout2';
const { Header } = Layout;

export default class layout extends Component {
  constructor ( props ) {
    super ( props );
    this.state = {
      nav: '1',
      theme: 'dark',
      themeColor: {
        color: '#fff',
        backgroundColor: '#000'
      }
    }
  }

  changeNav( e ) {
    this.setState( { nav: e.key } )
  }

  changeStyle () {
    console.log( 3333 )
    const { theme } = this.state;
    let themeStyle = {};
    if( theme === 'dark' ){
      themeStyle = {
        theme: 'light',
        themeColor: {
          color: '#000',
          backgroundColor: '#fff'
        }
      }
    } else {
      themeStyle = {
        theme: 'dark',
        themeColor: {
          color: '#fff',
          backgroundColor: '#000'
        }
      }
    }
    this.setState( themeStyle );
  }

  render () {
    const { nav, theme, themeColor } = this.state;
    console.log( 44, theme )
    return (
      <Layout className='default_layout' style={{ height: '100vh' }}>
        <Header style={{ padding: '0' }} className="header">
          <Mavigation themeColor={themeColor} changeStyle={this.changeStyle.bind(this)} theme={theme} changeNav={this.changeNav.bind(this)} />
        </Header>
        { nav === '1' && <Layout1 themeColor={themeColor} theme={theme}/> }
        { ( nav === '2' || nav === '3' ) && <Layout2/> }
      </Layout>
    );
  }
}