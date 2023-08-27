import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { countries } from "./data.js"

const NEW_GAME = 'NEW_GAME';
const NEXT_COUNTRY = 'NEXT_COUNTRY';
const CURSOR_MOVES = 'CURSOR_MOVES';
const CURSOR_IN_OUT = 'CURSOR_IN_OUT';
const SUM_ONE_SEC = 'SUM_ONE_SEC';
const CORRECT_ANSWER = 'CORRECT_ANSWER';
const STOP_TIMER = 'STOP_TIMER';
const WRONG_ANSWER = 'WRONG_ANSWER';
const REMOVE_OVERLAY = 'REMOVE_OVERLAY'
const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'

const ContextVariable = createContext()
export const useFlags = () => useContext(ContextVariable)

const reducer = (state, action) =>{
    if(action.type === NEW_GAME){
      let newArray = countries.filter(country => country.unMember)
      shuffleArray(newArray)
      if(action.payload.continent !== "World"){
        newArray = newArray.filter(country=> country.continents[0]===action.payload.continent)
      }
      return {
        ...state, 
        allCountries: newArray,
        missingCountries: newArray,
        selectedCountry: getRandomItemFromArray(newArray),
        timer: 0,
        isTimerRunning: true,
        correctAnswers: 0,
        wrongAnswers: 0,
        isOverlayOn: false,
        correctCountries : []
      }
    }
    if(action.type === SUM_ONE_SEC){
      return {
        ...state,
        timer: state.timer +1
      }
    }
    if(action.type === CURSOR_MOVES){
      return{
        ...state,
        cursorPosition: { x: action.payload.e.clientX+20, y: action.payload.e.clientY+20 }
      }
    }
    if(action.type === CURSOR_IN_OUT){
      return{
        ...state,
        isCursorIn: action.payload.isOut ? false : true
      }
    }
    if(action.type === NEXT_COUNTRY){
      let newCountry = state.selectedCountry
          while(newCountry === state.selectedCountry && state.missingCountries.length > 1){
            newCountry = getRandomItemFromArray(state.missingCountries)
          }
          return {
            ...state,
            selectedCountry: newCountry
          }
    }
    if(action.type === CORRECT_ANSWER){
        let newArray = state.missingCountries.filter(country => country.cioc !== action.payload.id)
        return {
            ...state,
            missingCountries: newArray,
            selectedCountry: newArray.length > 0 ? getRandomItemFromArray(newArray) : "",
            correctAnswers: state.correctAnswers + 1,
            correctCountries: [...state.correctCountries, action.payload.country]
        }
    }
    if(action.type === STOP_TIMER){
        return {
            ...state,
            isTimerRunning: false,
            isOverlayOn: true
        }
    }
    if(action.type === WRONG_ANSWER){
      return {
        ...state,
        wrongAnswers: state.wrongAnswers +1
      }
    }
    if(action.type === REMOVE_OVERLAY){
      return {
        ...state,
        isOverlayOn: false
      }
    }
    if(action.type === CHANGE_LANGUAGE){
      return {
        ...state,
        language: action.payload.language
      }
    }
    return state
  }

const initialState = {
    allCountries: [],
    missingCountries: ["S"],
    correctCountries: [],
    selectedCountry: null,
    timer: 0,
    isTimerRunning: true,
    cursorPosition: {x: 0, y: 0},
    isCursorIn: false,
    correctAnswers: 0,
    wrongAnswers: 0,
    isOverlayOn: false,
    language: "english"
}
  
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); 
      
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  function getRandomItemFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

export const FlagsVariables = ({children}) => {
    const [{
        allCountries,
        missingCountries,
        correctCountries,
        selectedCountry,
        timer,
        isTimerRunning,
        cursorPosition,
        isCursorIn,
        correctAnswers,
        wrongAnswers,
        isOverlayOn,
        language
    }, dispatch] = useReducer(reducer, initialState)
    
    const startNewGame = (continent)=>{
        dispatch({type: NEW_GAME, payload: {continent}})
    }
    const addOneSecond = ()=>{
        dispatch({type: SUM_ONE_SEC})
    }
    const passToOtherCountry = ()=>{
        dispatch({type:NEXT_COUNTRY})
    }
    const newCursorPosition = (e)=>{
        dispatch({type: CURSOR_MOVES, payload: {e}})
    }
    const cursorOut = (isOut)=>{
        dispatch({type: CURSOR_IN_OUT, payload: {isOut}})
      }

    const timeInHoursMins = (secs)=>{
        const segun = secs % 60
        const min = Math.floor(secs / 60) % 60
        const hours = Math.floor(secs / 3600)
        return !hours ? `${min < 10 ? `0${min}` : min}:${segun < 10 ? `0${segun}` : segun}` : `${hours < 10 ? `0${hours}` : hours}:${min < 10 ? `0${min}` : min}:${segun < 10 ? `0${segun}` : segun}`
    }
    const timeAsStrings = timeInHoursMins(timer)

    const rightAnswer = (id, country)=>{
        dispatch({type: CORRECT_ANSWER, payload: {id, country}})
    }

    const stopTimer = ()=>{
        dispatch({type: STOP_TIMER})
    }
    const incorrectAnswer = () =>{
      dispatch({type: WRONG_ANSWER})
    }
    const removeOverlay = ()=>{
      dispatch({type: REMOVE_OVERLAY})
    }
    const changeLanguage = (language)=>{
      dispatch({type: CHANGE_LANGUAGE, payload: {language}})
    }
    //useEffect(()=>console.log("isOverlay on en useFlags.jsx: " + isOverlayOn),[isOverlayOn])
  return <ContextVariable.Provider value={ {allCountries,
    missingCountries,
    selectedCountry,
    timeAsStrings,
    isTimerRunning,
    cursorPosition,
    isCursorIn,
    correctAnswers,
    wrongAnswers,
    isOverlayOn,
    language,
    correctCountries,
    startNewGame,
    addOneSecond,
    passToOtherCountry,
    newCursorPosition,
    cursorOut,
    rightAnswer,
    stopTimer,
    incorrectAnswer,
    removeOverlay,
    changeLanguage
 }}>
    {children}
  </ContextVariable.Provider>
}
