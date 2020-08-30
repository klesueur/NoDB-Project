import React from 'react'
import Display from '.components/Display' 
import './App.css'
import './reset.css'

function App() {
  return(

    <div className='body'>

        <header className='header'>
          <h1 className='tanktitle'> FISH TANK BUILDER </h1>
        </header>
        
        <section className='plantsContent' getElementByID='section'>
            <div className='plantsDisplay'>

            </div>
            </section>

            <footer className='tankContent'>
            <div className='tankObject'> Scott's Fish Tank 
                <div className='tanksPlantDisplay'></div>
            </div>
            </footer>

        <Display />
    </div>
  )
}

export default App