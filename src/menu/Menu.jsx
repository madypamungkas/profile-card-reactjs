import React from 'react';
import { Input, Menu} from 'antd';
import {
    TwitterOutlined
  } from '@ant-design/icons';
const { Search } = Input;

const { SubMenu } = Menu;

class NavBar extends React.Component {
    render () {
        const { selectedKeys} = this.props;
        return(
        <div className="menu" style={{backgroundColor:"gray"}}>
          <Menu onClick={this.handleClick} selectedKeys={selectedKeys} mode="horizontal" style={{backgroundColor:"gray"}}>
            <Menu.Item key="twitter" style={{borderBottom:'transparent', color:"white"}}>
              <TwitterOutlined />
              Twitter Account
            </Menu.Item>
            <Menu.Item key="search" style={{borderBottom:'transparent'}}>
              <Search key="search-box" className="search-box"
              placeholder="Find Profile..."
              onSearch={this.props.onSearch}
              style={{ width: 200 }}
              />
            </Menu.Item>
          </Menu>
        </div>
    )}
}

export default NavBar;