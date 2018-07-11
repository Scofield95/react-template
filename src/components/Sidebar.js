import React from 'react';
import { Menu, Icon } from 'antd';


const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;


class Sidebar extends React.Component {
  handleClick = (e) => {
    console.log('click ', e);
  }
  MenuItems(){
   return  this.props.menuData.map((item,index) =>
    {
      if(Array.isArray(item.child)){
        return <SubMenu key={index.toString()} 
                        title={<span><Icon type={item.icon} style={{ fontSize: 16, color: '#08c' }} /><span>{item.submenu}</span></span>}>
                {
                  item.child.map((son)=>
                    <Menu.Item key={son.url}>{son.url}</Menu.Item>
                  )
                }
              </SubMenu>
      }
      return <Menu.Item key={item.child.url}><Icon type={item.icon} style={{ fontSize: 16, color: '#08c' }} />{item.child.url}</Menu.Item>
    })
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 200 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
      {this.MenuItems()}
        {/* <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
          <MenuItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>

        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>

        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
        </SubMenu>
        <Menu.Item key="12" title={<span><Icon type="setting" /></span>}>Option 12</Menu.Item> */}
      </Menu>
    );
  }
}



export default Sidebar