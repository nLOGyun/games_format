import React, { Component } from "react";
import 'antd/dist/antd.css';
import { Menu } from "antd";
import { HighlightOutlined } from '@ant-design/icons';


export default class navigation extends Component {
  constructor ( props ) {
    super ( props );
  }

  render () {
    const { changeNav, theme, changeStyle, themeColor } = this.props;
    return (
      <div style={{ color: themeColor.color, backgroundColor: themeColor.backgroundColor }}>
        <Menu
          theme={theme}
          style={{ display: 'inline-block', width: '100%' }}
          mode="horizontal"
          defaultSelectedKeys={ [ '1' ] } onClick={ ( e ) => changeNav( e ) }
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
        <div style={{ display: 'inline-block', position:'absolute', right: '0' }}>
          <div style={{ padding: '0 1rem', fontSize: '1.3rem' }}>
            <HighlightOutlined onClick={() => changeStyle()}/>
          </div>
        </div>
      </div>
    );
  }
}