import React from 'react';
import './Layout.sass';
import Sidebar from '../components/Sidebar'
function Layout () {
  return(
    <div className='g-container'>
      <header className='g-header'></header>
      <aside className='g-aside'>
        <Sidebar/>
      </aside>
      <section className='g-view'></section>
      <footer className='g-footer'></footer>
    </div>
  )
}
export default Layout