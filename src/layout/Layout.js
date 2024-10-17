import { Sidenav } from '../components'
import { Outlet } from "react-router-dom";
import './Layout.css'

const Layout = () => {
    return (
        <div className='layout_container'>
            <div className='side_nav'>
                <Sidenav />
            </div>
            <div className='pages'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
