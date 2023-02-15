import { NavLink, Outlet } from "react-router-dom";
import logo from './assets/logo.png'

function Header() {
    const activeClassName = "underline font-[SatoshiVariable] underline-offset-[13px] decoration-2"

    return (
        <>
            <div className="absolute w-[80%] left-[50%] py-4 translate-x-[-50%] z-[2] flex border-b justify-between border-white border-solid">
                <div className="w-[15%] object-contain">
                <img src={logo} className="w-[80%]"/>
                </div>
                <ul className="flex  w-[40%] justify-between items-end text-white mr-[30%] ">
                    <li><NavLink to="Home" className={({isActive})=>isActive? activeClassName: undefined}>Home</NavLink></li>
                    <li><NavLink to="LandLord" className={({isActive})=>isActive? activeClassName: undefined}>LandLord</NavLink></li>
                    <li><NavLink to="Tenants" className={({isActive})=>isActive? activeClassName: undefined}>Tenants</NavLink></li>
                    <li><NavLink to="ContactUs" className={({isActive})=>isActive? activeClassName: undefined}>Contact Us</NavLink></li>
                </ul>
            </div>
            <Outlet />
        </>
    )
}

export default Header;