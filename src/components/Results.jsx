import React, { useEffect } from 'react'
import { FaGithub, FaLinkedin,FaPlusCircle } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom'
import { useFlags } from '../useFlags';

export const Results = () => {
    const {continent} = useParams()
    const {isOverlayOn, timeAsStrings, wrongAnswers, correctAnswers, startNewGame, removeOverlay} =useFlags()

    //useEffect(()=>console.log(`Overlay en Results.jsx: ${isOverlayOn}`),[isOverlayOn])
  return (
    <div className={isOverlayOn ? 'modal-overlay show-modal' : 'modal-overlay'}>
        <div className='results'>
            <button className='close-btn' onClick={removeOverlay}><FaPlusCircle/></button>
            <p className='results-titles'>Congratulations! You finished the challenge!</p>
            <div className='score-and-time'>
                <div className='results-conts'>
                    <p className='results-titles'>Score</p>
                    <h1>{`${Math.floor(correctAnswers / (correctAnswers+wrongAnswers)*100)}%`}</h1>
                </div>
                <div className='results-conts'>
                    <p className='results-titles'>Time</p>
                    <h1>{timeAsStrings}</h1>
                </div>
            </div>
            <div className='results-conts'>
                <p className='results-titles'>Game mode</p>
                <h3>{continent} Flags Quiz</h3>
            </div>
            <div className='results-conts'>
                <p className='results-titles'>Date</p>
                <h3>August 18, 2023 at 10:40:04 PM</h3>
            </div>
            <div className='results-btns'>
                <button className='play-again-btn' onClick={()=>startNewGame(continent)}>Play Again</button>
                <Link to='/'><button className='main-menu-btn' >Main menu</button></Link>
            </div>
            <div className='social-med-results'>
                <Link to='https://github.com/aanddy36'><FaGithub className='result-logo'/></Link>
                <Link to='https://www.linkedin.com/in/delchiaroa/'><FaLinkedin className='result-logo'/></Link>
            </div>
        </div>
    </div>
  )
}
