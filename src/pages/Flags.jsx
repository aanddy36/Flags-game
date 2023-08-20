import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Navbar } from '../components/Navbar.jsx'
import { FaAngleRight } from 'react-icons/fa';
import { useFlags } from '../useFlags.jsx';
import { Results } from '../components/Results.jsx';

export const Flags = () => {
    const {continent} = useParams()
    const {allCountries, missingCountries, selectedCountry, timeAsStrings, wrongAnswers, language, isOverlayOn,
      cursorPosition, isCursorIn, correctAnswers, correctCountries, isTimerRunning, startNewGame, addOneSecond, 
      passToOtherCountry, newCursorPosition, cursorOut, rightAnswer, stopTimer, incorrectAnswer} =useFlags()

    const [continente, setContinente] = useState()

    useEffect(() => {
      window.scrollTo(0, 0);
      startNewGame(continent)
    }, [continent]);

    useEffect(()=>{
      setContinente(()=>{
        if(continent == "Africa"){
          return "África"}
        if(continent == "Oceania"){
          return "Oceanía"}
        if(continent == "Europe"){
          return "Europa"}
        if(continent == "North America"){
          return "América del Norte"}
        if(continent == "South America"){
          return "América del Sur"}
        if(continent == "World"){
          return "Mundo"}
      })
    },[continent, language])
  
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
      const wrongMessage = document.querySelector(`#${cioc} div`)
      if(cioc === selectedCountry.cioc){
        console.log(decision);
        rightAnswer(cioc, decision)
      }else{
        wrongMessage.style.display = "block"
        setTimeout(()=>{
          wrongMessage.style.display = "none"
        },[1500])
        incorrectAnswer()
      }
    }

    useEffect(()=>{
      if(missingCountries.length === 0){
        stopTimer()
      }
    },[missingCountries])

    useEffect(()=>console.log(isOverlayOn),[isOverlayOn])

    
  return (
    <div>
      <Navbar params={continent}/>
      <h1 className='flag-title'>
        {language === 'english' ? `${continent}: Flags` : `${continente}: Banderas`}
        <span style={{color: "#5e5e5e"}}> - {language === "english" ? 'Flags Quiz Games' : 'Quiz de Banderas'}</span>
      </h1>
      <div className='flag-info'>
        <div style={{display:"flex", justifyContent:"space-between", gap:"20px"}}>
          <h3>{correctAnswers}/{allCountries.length}</h3>
          <h3>{!correctAnswers ? 0 : Math.floor(correctAnswers / (correctAnswers+wrongAnswers)*100)}%</h3>
        </div>
        <h3>{timeAsStrings}</h3>
        <h3 className='selected-country'>
          {selectedCountry ? (language === "english" ? selectedCountry.name.common : selectedCountry.translations.spa.common) : ""}
          <button style={{display: missingCountries.length > 0 ? "block" : "none"}} onClick={passToOtherCountry} className='next-country'>
            <FaAngleRight/>
          </button>
        </h3>
      </div>
      <div className='flag-cont' onMouseMove={newCursorPosition} onMouseEnter={()=>cursorOut(false)} onMouseLeave={()=>cursorOut(true)}>    
        <p className='cursor-follower' style={{ left: cursorPosition.x, top: cursorPosition.y, display: isCursorIn && selectedCountry ? "flex" : "none" , }}>
          {selectedCountry ? (language === 'english' ? `Click on ${selectedCountry.name.common}` : `Hunde en ${selectedCountry.translations.spa.common}`):""}
        </p>  
        {allCountries.map(country =>{
          return <div className='flag-btn-cont' key={country.cioc}  id={country.cioc}> 
              <button className='flag-btn' style={{pointerEvents: correctCountries.includes(country) ? "none" : "auto"}} onClick={()=>pressFlag(country)}>
                <img src={country.flags.png} alt={country.flags.alt} className={correctCountries.includes(country) ? 'flag button-disabled' : 'flag'}/>
              </button>
              <div className='wrong-country'>
                {language === 'english' ? country.name.common : country.translations.spa.common}
              </div>
          </div>
        })}
      </div>
      <Results continente={continente}/>
    </div>
  )
}
