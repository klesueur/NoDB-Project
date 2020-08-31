import React from 'react'
import Display from './components/Display' 
import './App.css'


function App() {
  return(

    <div className='App'>

        <header className='header'>
          <h1 className='appTitle'> FISH TANK BUILDER </h1>
        </header>
        
        {/* <section className='plantsContent' getElementByID='section'>
            <div className='plantsDisplay'>

            </div>
            </section>

            <footer className='tankContent'>
            <div className='tankObject'> Scott's Fish Tank 
                <div className='tanksPlantDisplay'></div>
            </div>
            </footer> */}

        <Display />
    </div>
  )
}

export default App