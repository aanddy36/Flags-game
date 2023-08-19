import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaLanguage, FaAlignJustify } from 'react-icons/fa';
import { Link, NavLink } from "react-router-dom"

const counter = (num)=>{
    let total = 0
    for(let i = num; i > 0; i--){
        total +=i
    }
    return total
}
console.log((counter(258)*100)/counter(365));

export const Navbar = ({params}) => {
    const [isToggled, setIsToggled] = useState(false)
    useEffect(()=>{
        setIsToggled(false)
    },[params])
  return (
    <nav className='navbar'>
        <Link to='/' className='navbar-title'>Flags Game</Link>
        <ul className='navbar-list'>
            <NavLink to='/World' className={({isActive})=> isActive ? "selected" : ""}><button>World</button></NavLink>
            <NavLink to='/Europe' className={({isActive})=> isActive ? "selected" : ""}><button>Europe</button></NavLink>
            <NavLink to='/South America' className={({isActive})=> isActive ? "selected" : ""}><button>South America</button></NavLink>
            <NavLink to='/North America' className={({isActive})=> isActive ? "selected" : ""}><button>North America</button></NavLink>
            <NavLink to='/Africa' className={({isActive})=> isActive ? "selected" : ""}><button>Africa</button></NavLink>
            <NavLink to='/Asia' className={({isActive})=> isActive ? "selected" : ""}><button>Asia</button></NavLink>
            <NavLink to='/Oceania' className={({isActive})=> isActive ? "selected" : ""}><button>Oceania</button></NavLink>
        </ul>
        <div className='navbar-logos'>
            <div className='navbar-socialmedia'>
                <Link to='https://github.com/aanddy36'><FaGithub className='navbar-logo'/></Link>
                <Link to='https://www.linkedin.com/in/delchiaroa/'><FaLinkedin className='navbar-logo'/></Link>
            </div>
            <button style={{border:"none"}}><FaLanguage className='navbar-logo translate-logo'/></button>
        </div>
        <FaAlignJustify className='toggle-menu' onClick={()=>setIsToggled(prev => !prev)}/>
        <ul className='toggle-list' style={{height: isToggled ? "430px" : "0"}}>
            <NavLink to='/World' className={({isActive})=> isActive ? "selected-toggle" : ""}><button className='a'>World</button></NavLink>
            <NavLink to='/Europe' className={({isActive})=> isActive ? "selected-toggle" : ""}><button className='a'>Europe</button></NavLink>
            <NavLink to='/South America' className={({isActive})=> isActive ? "selected-toggle" : ""}><button className='a'>South America</button></NavLink>
            <NavLink to='/North America' className={({isActive})=> isActive ? "selected-toggle" : ""}><button className='a'>North America</button></NavLink>
            <NavLink to='/Africa' className={({isActive})=> isActive ? "selected-toggle" : ""}><button className='a'>Africa</button></NavLink>
            <NavLink to='/Asia' className={({isActive})=> isActive ? "selected-toggle" : ""}><button className='a'>Asia</button></NavLink>
            <NavLink to='/Oceania' className={({isActive})=> isActive ? "selected-toggle" : ""}><button className='a'>Oceania</button></NavLink>
            <div className='toggle-logos'>
                <div className='toggle-socialmedia'>
                    <Link to='https://github.com/aanddy36'><FaGithub className='toggle-logo'/></Link>
                    <Link to='https://www.linkedin.com/in/delchiaroa/'><FaLinkedin className='toggle-logo'/></Link>
                </div>
                <button style={{border:"none"}}><FaLanguage className='toggle-logo translate-toggle'/></button>
            </div>
        </ul>
    </nav>
  )
}
