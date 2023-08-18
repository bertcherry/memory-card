import { useState } from 'react';
import './App.css';
import Data from './components/Data';
import HeroCards from './components/HeroCards';

function App() {
    const [randData, setRandData] = useState(randomizeData(Data()));

    function randomizeData(heroData) {
        for (let i = heroData.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = heroData[i];
            heroData[i] = heroData[j];
            heroData[j] = temp;
        }
        return heroData;
    }

    return (
        <>
            <div className='heading'>
                <h1>Super Memory Game</h1>
                <div /* Counter will go here */ />
            </div>
            <HeroCards heroData={randData}/>
        </>
    );
}

export default App
