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
      if(item.child){
        return <SubMenu key={index.toString()} 
                        title={<span><Icon type={item.icon} style={{ fontSize: 16, color: '#08c' }} /><span>{item.submenu}</span></span>}>
                {
                  item.child.map((son)=>
                    <Menu.Item key={son.submenu}>{son.url}</Menu.Item>
                  )
                }
              </SubMenu>
      }
      return <Menu.Item key={item.url}><Icon type={item.icon} style={{ fontSize: 16, color: '#08c' }} />{item.submenu}</Menu.Item>
    })
  }
  render() {
    console.log(this.props)
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 200 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
      {this.MenuItems()}
      </Menu>
    );
  }
}

export default Sidebar