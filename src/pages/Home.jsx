import React from 'react'
import { FaGithub, FaLinkedin, FaLanguage } from 'react-icons/fa';
import { Link } from "react-router-dom"

export const Home = () => {

  return (
    <div className='home-cont'>
        <div className='title-cont'>
            <h1 className='title'>Flags Game</h1>
            <p style={{fontSize: "20px"}}>Guess the country flags!</p>
        </div>
        <div className='logos'>
          <div className='social-media'> 
            <Link to='https://github.com/aanddy36'><FaGithub className='home-logo'/></Link>
            <Link to='https://www.linkedin.com/in/delchiaroa/'><FaLinkedin className='home-logo'/></Link>
          </div>
          <button style={{border:"none"}}><FaLanguage className='home-logo translate-logo'/></button>
        </div>
        <Link className='home-links all' to='/World'><button>World</button></Link>
        <Link className='home-links europe' to='/Europe'><button>Europe</button></Link>
        <Link className='home-links s-america' to='/South America'><button>South America</button></Link>
        <Link className='home-links n-america' to='/North America'><button>North America</button></Link>
        <Link className='home-links africa' to='/Africa'><button>Africa</button></Link>
        <Link className='home-links asia' to='/Asia'><button>Asia</button></Link>
        <Link className='home-links oceania' to='/Oceania'><button>Oceania</button></Link>
    </div>
  )
}
