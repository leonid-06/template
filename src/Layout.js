import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div>
            <h1>Heelo bonzshi</h1>
            <header>
                <Link to='/'>Home</Link>
                <br />
                <Link to='/abc'>abc</Link>
                <br />
                <Link to='/qwe'>qwe</Link>
            </header>

            <Outlet />

            <footer>Paka bomzshi</footer>
        </div>
    )
}
