# Flags Game
## Description
### 1. Introduction
Flags Game created using the open-source [REST Countries API project](https://gitlab.com/restcountries/restcountries). You can pick a specific continent or the entire world.
At the end of the game you'll see the time you lasted and the score based on the amount of wrong answers. 
The game is available in spanish or english.

### 2. Home Page
In the home page you must select the continent (or the World) to which you want to guess his flags. 

### 3. Game Page
As soon as you pick the Game Mode, their respective flags will be displayed and the time will start to run.
- At the top you will see the flag you must click. 
- In case you ***miss***, you will see a message with the name of the flag clicked, but if you ***guess***, the flag will be blocked and othe name will be displayed at the top.
- If you guess them all, a pop-up box will appear with your score, time, and the option to play again or to go back to main menu.
- Once in the Game Page, you can select in the navbar other game mode.

## Technologies used
- React
- JavaScript
- CSS

## Concepts Applied
- ***Global State Management*** using useReducer()
- ***Routing*** with React Router
- ***Global variables*** for changing languages
- Responsive for all devices
- ***Hooks***: useState, useEffect, useReducer, useContext.
