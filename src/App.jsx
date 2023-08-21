import { useState, useEffect } from 'react';
import './App.css';
import HeroCards from './components/HeroCards';

function App() {
    const [heroData, setHeroData] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const heroIds = [107, 275, 309, 480, 522, 567, 579, 638, 720];
        let mounted = true;
        let temp = [];

        const fetchData = async (heroId) => {
            const response = await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/' + heroId + '.json');
            const data = await response.json();
            temp.push(data);
        };
        
        heroIds.forEach(heroId => {
            if (mounted) {
                fetchData(heroId);
            }  
        });
        setHeroData(temp);

        return () => mounted = false;
        
    }, []);

    function randomizeData(data) {
        for (let i = data.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = data[i];
            data[i] = data[j];
            data[j] = temp;
        }
        return data;
    }

    function handleStart() {
        setIsPlaying(true);
    }

    return (
        <>
            <div className='heading'>
                <h1>Super Memory Game</h1>
                <div /* Counter will go here */ />
            </div>
            {isPlaying === false ? (
                <div className='info'>
                    <p>Click each picture only once! The heroes are always on the move and will reshuffle between each click. Try to get all nine. Good luck!</p>
                    <button onClick={handleStart}>Play</button>
                </div>
            ) : (
                <HeroCards heroData={randomizeData(heroData)}/>
            )}
        </>
    );
}

export default App
