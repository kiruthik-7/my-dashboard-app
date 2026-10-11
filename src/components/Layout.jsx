import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
       
    <aside className="sidebar">
        <nav className="sidebar-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/counter">Counter App</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
    </aside>
        
        <main>
            <Outlet />
        </main>
    </>
  )
}
export default Layout;