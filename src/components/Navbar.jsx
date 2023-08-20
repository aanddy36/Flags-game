import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaLanguage, FaAlignJustify } from 'react-icons/fa';
import { Link, NavLink } from "react-router-dom"
import { useFlags } from '../useFlags';
import spain from "../images/spain.png"
import uk from "../images/uk.png"

//const counter = (num)=>{
//    let total = 0
//    for(let i = num; i > 0; i--){
//        total +=i
//    }
//    return total
//}
//console.log((counter(258)*100)/counter(365));


export const Navbar = ({params}) => {
    const [isToggled, setIsToggled] = useState(false)
    useEffect(()=>{
        setIsToggled(false)
        setIsLanguageToggled(false)
    },[params])
    const [isLanguageToggled, setIsLanguageToggled] = useState(false)
    const {language, changeLanguage} = useFlags()
    const handleChange = (e)=>{
        changeLanguage(e.target.value)
        setIsLanguageToggled(false)
    }
  return (
    <nav className='navbar'>
        <Link to='/' className='navbar-title'>Flags Game</Link>
        <ul className='navbar-list'>
            <NavLink to='/World' className={({isActive})=> isActive ? "selected" : ""}><button>{language === 'english'?'World':'Mundo'}</button></NavLink>
            <NavLink to='/Europe' className={({isActive})=> isActive ? "selected" : ""}><button>{language === 'english'?'Europe':'Europa'}</button></NavLink>
            <NavLink to='/South America' className={({isActive})=> isActive ? "selected" : ""}><button>{language === 'english'?'South America':'América del Sur'}</button></NavLink>
            <NavLink to='/North America' className={({isActive})=> isActive ? "selected" : ""}><button>{language === 'english'?'North America':'América del Norte'}</button></NavLink>
            <NavLink to='/Africa' className={({isActive})=> isActive ? "selected" : ""}><button>{language === 'english'?'Africa':'África'}</button></NavLink>
            <NavLink to='/Asia' className={({isActive})=> isActive ? "selected" : ""}><button>Asia</button></NavLink>
            <NavLink to='/Oceania' className={({isActive})=> isActive ? "selected" : ""}><button>{language === 'english'?'Oceania':'Oceanía'}</button></NavLink>
        </ul>
        <div className='navbar-logos'>
            <div className='navbar-socialmedia'>
                <Link to='https://github.com/aanddy36'><FaGithub className='navbar-logo'/></Link>
                <Link to='https://www.linkedin.com/in/delchiaroa/'><FaLinkedin className='navbar-logo'/></Link>
            </div>
            <div style={{position: "relative"}}>
                <button style={{border:"none"}} onClick={()=>setIsLanguageToggled(prev => !prev)}><FaLanguage className='navbar-logo translate-logo'/></button>
                <div className='language-menu-navbar' style={{visibility: isLanguageToggled ? 'visible' : 'hidden', opacity: isLanguageToggled ? '1' : '0'}}>
                    <div>
                        <input type='radio' name='language' id='english' onChange={handleChange} value='english'></input>
                        <label htmlFor='english' className={language === 'english' ? 'navbar-selected-language' : ''}>
                            <img src={uk} className='mini-img'/>{language === 'english' ? 'English' : 'Inglés'}
                        </label>
                    </div>
                    <div>
                        <input type='radio' name='language' id='spanish' onChange={handleChange} value='spanish'></input>
                        <label htmlFor='spanish' className={language === 'spanish' ? 'navbar-selected-language' : ''}>
                            <img src={spain} className='mini-img'/>{language === 'english' ? 'Spanish' : 'Español'}
                        </label>
                    </div>
                </div>                
            </div>
        </div>
        <FaAlignJustify className='toggle-menu' onClick={()=>{
            setIsToggled(prev => !prev)
            setIsLanguageToggled(prev => false)
            }}/>
        <ul className='toggle-list' style={{height: isToggled ? "430px" : "0"}}>
            <NavLink to='/World' className={({isActive})=> isActive ? "selected-toggle" : ""}><button className='a'>{language === 'english'?'World':'Mundo'}</button></NavLink>
            <NavLink to='/Europe' className={({isActive})=> isActive ? "selected-toggle" : ""}><button className='a'>{language === 'english'?'Europe':'Europa'}</button></NavLink>
            <NavLink to='/South America' className={({isActive})=> isActive ? "selected-toggle" : ""}><button className='a'>{language === 'english'?'South America':'América del Sur'}</button></NavLink>
            <NavLink to='/North America' className={({isActive})=> isActive ? "selected-toggle" : ""}><button className='a'>{language === 'english'?'North America':'América del Norte'}</button></NavLink>
            <NavLink to='/Africa' className={({isActive})=> isActive ? "selected-toggle" : ""}><button className='a'>{language === 'english'?'Africa':'África'}</button></NavLink>
            <NavLink to='/Asia' className={({isActive})=> isActive ? "selected-toggle" : ""}><button className='a'>Asia</button></NavLink>
            <NavLink to='/Oceania' className={({isActive})=> isActive ? "selected-toggle" : ""}><button className='a'>{language === 'english'?'Oceania':'Oceanía'}</button></NavLink>
            <div className='toggle-logos'>
                <div className='toggle-socialmedia'>
                    <Link to='https://github.com/aanddy36'><FaGithub className='toggle-logo'/></Link>
                    <Link to='https://www.linkedin.com/in/delchiaroa/'><FaLinkedin className='toggle-logo'/></Link>
                </div>
                <div style={{position:"relative"}}>
                    <button style={{border:"none"}} onClick={()=>setIsLanguageToggled(prev => !prev)}><FaLanguage className='toggle-logo translate-toggle'/></button>
                    <div className='toggle-language-menu' style={{visibility: isLanguageToggled ? 'visible' : 'hidden', opacity: isLanguageToggled ? '1' : '0'}}>
                        <div>
                            <input type='radio' name='language' id='english' onChange={handleChange} value='english'></input>
                            <label htmlFor='english' className={language === 'english' ? 'toggle-selected-language' : ''}>
                                <img src={uk} className='mini-img'/>{language === 'english' ? 'English' : 'Inglés'}
                            </label>
                        </div>
                        <div>
                            <input type='radio' name='language' id='spanish' onChange={handleChange} value='spanish'></input>
                            <label htmlFor='spanish' className={language === 'spanish' ? 'toggle-selected-language' : ''}>
                                <img src={spain} className='mini-img'/>{language === 'english' ? 'Spanish' : 'Español'}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </ul>
    </nav>
  )
}
