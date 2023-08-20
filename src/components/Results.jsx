import React, { useEffect } from 'react'
import { FaGithub, FaLinkedin,FaPlusCircle } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom'
import { useFlags } from '../useFlags';

export const Results = ({continente}) => {
    const {continent} = useParams()
    const {isOverlayOn, timeAsStrings, wrongAnswers, correctAnswers, startNewGame, removeOverlay, language} =useFlags()

  return (
    <div className={isOverlayOn ? 'modal-overlay show-modal' : 'modal-overlay'}>
        <div className='results'>
            <button className='close-btn' onClick={removeOverlay}><FaPlusCircle/></button>
            <p className='results-titles'>
                {language === "english" ? 'Congratulations! You finished the challenge!' : '¡Felicitaciones! ¡Terminaste el quiz!'}
            </p>
            <div className='score-and-time'>
                <div className='results-conts'>
                    <p className='results-titles'>{language === "english" ? 'Score' : 'Puntaje'}</p>
                    <h1>{`${Math.floor(correctAnswers / (correctAnswers+wrongAnswers)*100)}%`}</h1>
                </div>
                <div className='results-conts'>
                    <p className='results-titles'>{language === "english" ? 'Time' : 'Tiempo'}</p>
                    <h1>{timeAsStrings}</h1>
                </div>
            </div>
            <div className='results-conts'>
                <p className='results-titles'>{language === "english" ? 'Game mode' : 'Modo de juego'}</p>
                <h3>{language === "english" ? `${continent} Flags Quiz` : `Quiz: Banderas de ${continente}`}</h3>
            </div>
            <div className='results-btns'>
                <button className='play-again-btn' onClick={()=>startNewGame(continent)}>
                    {language === "english" ? 'Play Again' : 'Juega de nuevo'}
                </button>
                <Link to='/' onClick={()=>startNewGame(continent)}><button className='main-menu-btn' >{language === "english" ? 'Main Menu' : 'Menú Principal'}</button></Link>
            </div>
            <div className='social-med-results'>
                <Link to='https://github.com/aanddy36'><FaGithub className='result-logo'/></Link>
                <Link to='https://www.linkedin.com/in/delchiaroa/'><FaLinkedin className='result-logo'/></Link>
            </div>
        </div>
    </div>
  )
}
