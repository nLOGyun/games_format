import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import '../css/Box/style.css';
import 'antd/dist/antd.css'
import BoxGame from '../components/Box/boxGame';
import Mavigation from "./navigation";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class layout extends Component {
  constructor ( props ) {
    super ( props );
    this.state = {
      lightStyle: 'dark',
      menuItem: ''
    }
  }

  clickMenu ( e ) {
    this.setState ( { menuItem: e.key } );
  }

  render () {
    const { menuItem } = this.state;

    return (
      <Layout>
        <Header className="header">
          <div className="logo"/>
          <Mavigation/>
        </Header>
        <Layout>
          <Sider width={ 200 } className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={ [ '1' ] }
              defaultOpenKeys={ [ 'sub1' ] }
              style={ { height: '100%', borderRight: 0 } }
            >
              <SubMenu key="sub1" title="someGames" onClick={ ( e ) => this.clickMenu ( e ) }>
                <Menu.Item key="Mine clearing">Mine clearing</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={ { padding: '0 24px 24px' } }>
            {/*<Breadcrumb style={ { margin: '16px 0' } }>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>*/ }
            <div style={ { height: '40px', lineHeight: '40px' } }> Good Luck For You</div>
            <Content
              className="site-layout-background"
              style={ {
                padding: 24,
                margin: 0,
                minHeight: 280,
              } }
            >
              {
                menuItem === 'Mine clearing' && <BoxGame/>
              }
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}