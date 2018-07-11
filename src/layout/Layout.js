import React from 'react';
import './Layout.sass';
import Sidebar from '../components/Sidebar'
import menuData from '../mockData/menu.js'
import Headerbar from '../components/Headerbar'
function Layout () {
  return(
    <div className='g-container'>
      <header className='g-header'>
        <Headerbar/>
      </header>
      <aside className='g-aside'>
        <Sidebar menuData={menuData}/>
      </aside>
      <section className='g-view'></section>
      <footer className='g-footer'></footer>
    </div>
  )
}
export default Layout