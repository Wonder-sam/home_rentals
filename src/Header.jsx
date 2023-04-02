import React from 'react'
import { NavLink, Outlet } from "react-router-dom";
import logo from './assets/logoCol.png'

function Header() {
    const drawer = React.useRef(null)
    const activeClassName = "underline font-[SatoshiVariable] underline-offset-[13px] decoration-2"
    const mobileactiveClassName = "underline font-[SatoshiVariable] underline-offset-[13px] decoration-2 decoration-color-orange-500 text-orange-500"

    const openDrawer =()=>{
        drawer.current.classList.remove('hidden')
    }

    const closeDrawer =()=>{
        drawer.current.classList.add('hidden')
    }

    return (
        <div className="w-full">
            <div className="flex absolute w-full md:w-[80%] left-[50%] py-4 translate-x-[-50%] z-[2] border-b justify-between border-white border-solid">
                <div className="p-4">
                    <p onClick={()=>openDrawer()} className="text-white">fish</p>
                </div>
                <div className="w-max md:w-[15%] object-contain">
                <img src={logo} className="w-[80%]" alt=""/>
                </div>
                <ul className="hidden md:flex  w-[40%] justify-between items-end text-white mr-[30%] ">
                    <li><NavLink to="Home" className={({isActive})=>isActive? activeClassName: undefined}>Home</NavLink></li>
                    <li><NavLink to="LandLord" className={({isActive})=>isActive? activeClassName: undefined}>LandLord</NavLink></li>
                    <li><NavLink to="Tenants" className={({isActive})=>isActive? activeClassName: undefined}>Tenants</NavLink></li>
                    <li><NavLink to="ContactUs" className={({isActive})=>isActive? activeClassName: undefined}>Contact Us</NavLink></li>
                </ul>
            </div>
            <div ref={drawer} className="hidden top-0 right-0 bottom-0 left-0 fixed z-[3] bg-white w-full p-[5%]">
                <div className="flex justify-between mb-6">
                    <img src={logo} className="w-[40%]" alt=""/>
                    <p onClick={()=>closeDrawer()} className="text-3xl">X</p>
                </div>
                <ul className="w-full justify-between items-end text-black leading-[3em] text-xl ">
                    <li onClick={()=>closeDrawer()}><NavLink to="Home" className={({isActive})=>isActive? mobileactiveClassName: undefined}>Home</NavLink></li>
                    <li onClick={()=>closeDrawer()}><NavLink to="LandLord" className={({isActive})=>isActive? mobileactiveClassName: undefined}>LandLord</NavLink></li>
                    <li onClick={()=>closeDrawer()}><NavLink to="Tenants" className={({isActive})=>isActive? mobileactiveClassName: undefined}>Tenants</NavLink></li>
                    <li onClick={()=>closeDrawer()}><NavLink to="ContactUs" className={({isActive})=>isActive? mobileactiveClassName: undefined}>Contact Us</NavLink></li>
                </ul>
            </div>            
            <Outlet />
        </div>
    )
}

export default Header;