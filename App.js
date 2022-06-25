import React from "react"
import ReactDOM from "react-dom"

export default function App() {
    
const planetsObj = [{"name": "Mercury","moons": 0},{"name": "Venus","moons": 0},{"name": "Earth","moons": 1},{"name": "Mars","moons": 2},{"name": "Jupiter","moons": 67},{"name": "Saturn","moons": 62},{"name": "Uranus","moons":27},{"name": "Neptune","moons": 14}]

let allMoons=0


   const everyPlanetName=planetsObj.map(prevPlanets => {
    return (
     <p key={Math.random()} className="planetsName">{prevPlanets.name}:</p>
        )
})

const everyPlanetMoon= planetsObj.map(prevPlanet => {
    allMoons+=prevPlanet.moons
    return (
        <p key={Math.random()} className="planetsMoon">{prevPlanet.moons} moons</p>
    )
    
})

    return(
        <div className="planetsDiv">
        <h1>{everyPlanetName}</h1>
        <h1>{everyPlanetMoon}</h1>
        <h1 className="totalMoons">Total Moons In The Solar System: {allMoons}</h1>
        </div>
    )
    
}