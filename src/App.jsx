import { useState, useEffect } from 'react';
import './App.css';
import Data from './components/Data';
import HeroCards from './components/HeroCards';

function App() {
    const [heroData, setHeroData] = useState([]);

    useEffect(() => {
        const heroIds = [107, 275, 309, 480, 522, 567, 579, 638, 720];
        let mounted = true;

        const fetchData = async (heroId) => {
            const response = await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/' + heroId + '.json');
            const data = await response.json();
            return data;
        };

        let temp = [];
        heroIds.forEach(heroId => {
            if (mounted) {
                temp.push(fetchData(heroId));
            }  
        });
        setHeroData(temp);

        return () => mounted = false;
        
    }, []);

    //need to properly set the random data onload
    function randomizeData(data) {
        for (let i = data.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = data[i];
            data[i] = data[j];
            data[j] = temp;
        }
        return data;
    }

    //window.onload = () => {setHeroData(randomizeData(heroData))}

    return (
        <>
            <div className='heading'>
                <h1>Super Memory Game</h1>
                <div /* Counter will go here */ />
            </div>
            <HeroCards heroData={heroData}/>
        </>
    );
}

export default App
