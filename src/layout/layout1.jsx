import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import '../css/Box/style.css';
import 'antd/dist/antd.css';
import '../css/layout/layout.css'
import BoxGame from '../components/Box/boxGame';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

export default class layout1 extends Component {
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
    const { theme, themeColor } = this.props;

    return (
      <Layout>
        <Sider width={ 200 } className="site-layout-background">
          <Menu
            theme={theme}
            mode="inline"
            defaultSelectedKeys={ [ '1' ] }
            defaultOpenKeys={ [ 'sub1' ] }
            style={ { height: '100%', borderRight: 0 } }
          >
            <SubMenu key="sub1" title="someGames" onClick={ ( e ) => this.clickMenu ( e ) }>
              <Menu.Item key="Mine clearing">Mine clearing</Menu.Item>
              <Menu.Item key="option2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={ { padding: '0 24px 24px', backgroundColor: themeColor.backgroundColor, color: themeColor.color } }>
          <div style={ { height: '40px', lineHeight: '40px' } }> Good Luck For You</div>
          <Content
            className="site-layout-background"
            style={ {
              backgroundColor: themeColor.backgroundColor,
              color: themeColor.color,
              padding: 24,
              margin: 0,
              minHeight: 280,
              height: '100%'
            } }
          >
            {
              menuItem === 'Mine clearing' && <BoxGame/>
            }
            {
              menuItem === 'option2' && <iframe className='default_iframe' src='http://localhost:5001/'/>
            }
          </Content>
        </Layout>
      </Layout>
    );
  }
}