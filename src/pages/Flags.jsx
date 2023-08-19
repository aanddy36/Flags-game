import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Navbar } from '../components/Navbar.jsx'
import { FaAngleRight } from 'react-icons/fa';
import { useFlags } from '../useFlags.jsx';
import { Results } from '../components/Results.jsx';


export const Flags = () => {
    const {continent} = useParams()
    const {allCountries, missingCountries, selectedCountry, timeAsStrings, wrongAnswers,
      cursorPosition, isCursorIn, correctAnswers, isTimerRunning, startNewGame, addOneSecond, 
      passToOtherCountry, newCursorPosition, cursorOut, rightAnswer, stopTimer, incorrectAnswer} =useFlags()

    useEffect(() => {
      window.scrollTo(0, 0);
      startNewGame(continent)
    }, [continent]);
  
    useEffect(() => {
      let interval;

      if(isTimerRunning){
        interval = setInterval(() => {
          addOneSecond()
        }, 1000);
      } else{
        clearInterval(interval)
      }

      return () => clearInterval(interval); // Cleanup function to clear the interval when component unmounts   
    }, [isTimerRunning]);

    const pressFlag = (decision)=>{
      const {cioc} = decision
      const boton = document.querySelector(`#${cioc} button`)
      const wrongMessage = document.querySelector(`#${cioc} div`)
      console.log(boton);
      if(cioc === selectedCountry.cioc){
        console.log(cioc);
        const imagen = document.querySelector(`#${cioc} img`)
        boton.style.pointerEvents = 'none';
        imagen.classList.add("button-disabled")
        rightAnswer(cioc)
      }else{
        wrongMessage.style.display = "block"
        setTimeout(()=>{
          wrongMessage.style.display = "none"
        },[1500])
        incorrectAnswer()
        console.log(wrongMessage);
      }
    }
    //useEffect(()=>console.log(`Overlay en Flags.jsx: ${isOverlayOn}`),[isOverlayOn])

    useEffect(()=>{
      if(missingCountries.length === 0){
        stopTimer()
      }
    },[missingCountries])

  return (
    <div>
      <Navbar params={continent}/>
      <h1 className='flag-title'>{`${continent}: Flags`}<span style={{color: "#5e5e5e"}}> - Flags Quiz Games</span></h1>
      <div className='flag-info'>
        <div style={{display:"flex", justifyContent:"space-between", gap:"20px"}}>
          <h3>{correctAnswers}/{allCountries.length}</h3>
           <h3>{!correctAnswers ? 0 : Math.floor(correctAnswers / (correctAnswers+wrongAnswers)*100)}%</h3>
        </div>
        <h3>{timeAsStrings}</h3>
        <h3 className='selected-country'>{selectedCountry ? selectedCountry.name.common : ""}<button style={{display: missingCountries.length > 0 ? "block" : "none"}} onClick={passToOtherCountry} className='next-country'><FaAngleRight/></button></h3>
      </div>
      <div className='flag-cont' onMouseMove={newCursorPosition} onMouseEnter={()=>cursorOut(false)} onMouseLeave={()=>cursorOut(true)}>    
      <p className='cursor-follower' style={{ left: cursorPosition.x, top: cursorPosition.y, display: isCursorIn && selectedCountry ? "flex" : "none" , }}>{selectedCountry ? `Click on ${selectedCountry?.name.common}`:""}</p>  
        {allCountries.map(country =>{
          return <div className='flag-btn-cont' key={country.cioc}  id={country.cioc}> 
            <button className='flag-btn' onClick={()=>pressFlag(country)}>
              <img src={country.flags.png} alt={country.flags.alt} className='flag'/>
            </button>
            <div className='wrong-country'>{country.name.common}</div>
          </div>
        })}
      </div>
      <Results/>
    </div>
  )
}
