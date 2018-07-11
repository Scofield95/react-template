import React from 'react';
import './Layout.sass';
import Sidebar from '../components/Sidebar'
const menuData = [
  {
    submenu: '首页',
    icon: 'appstore',
    child: [
      {
        url: '',
        item: '',
        icon: 'appstore'
      }
    ]
  },
  {
    submenu: '钱包',
    icon: 'mail',
    child: [
      {
        url: 'wallet',
        item: '',
        icon: 'mail'
      }
    ]
  },
  {
    submenu: '站点',
    icon: 'setting',
    child: [
      {
        url: 'site',
        item: '',
        icon: 'setting'
      }
    ]
  },
  {
    submenu: '我的订单',
    icon: 'setting',
    child: {
      url: 'asdfsadf',
      item: '',
      icon: 'setting'
    }
  }
]
function Layout () {
  return(
    <div className='g-container'>
      <header className='g-header'></header>
      <aside className='g-aside'>
        <Sidebar menuData={menuData}/>
      </aside>
      <section className='g-view'></section>
      <footer className='g-footer'></footer>
    </div>
  )
}
export default Layout