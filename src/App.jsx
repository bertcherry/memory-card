import { useState, useEffect } from 'react';
import './App.css';
import HeroCards from './components/HeroCards';
import Info from './components/Info';

function App() {
    const [heroData, setHeroData] = useState([]);
    const [playState, setPlayState] = useState('start');
    const [playedIds, setPlayedIds] = useState([]);
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

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
        setPlayState('playing');
    }

    function handleReset() {
        setPlayedIds([]);
        setCurrentScore(0);
        setHighScore(0);
        setPlayState('start');
    }

    function handlePlay(heroId) {
        if (!playedIds.includes(heroId)) {
            let tempScore = playedIds.length + 1;
            setCurrentScore(tempScore);
            if (tempScore > highScore) {
                setHighScore(tempScore);
            }
            setPlayedIds([...playedIds, heroId]);
            if (tempScore > 8) {
                setPlayState('won');
            } else {
                randomizeData(heroData);
            }
        } else {
            setPlayedIds([]);
            setPlayState('lost');
            setCurrentScore(0);
        }
    }

    function Body() {
        if (playState === 'playing') {
            return (
                <HeroCards heroData={randomizeData(heroData)} handlePlay={handlePlay}/>
        )} else {
            return (
                <div className='info'>
                    <Info playState={playState} handleStart={handleStart} handleReset={handleReset} />
                </div>
            )
        }
    }

    return (
        <>
            <div className='heading'>
                <h1>Super Memory Game</h1>
                <div className='scoreboard'>
                    <div>High Score: {highScore}</div>
                    <div>Current Score: {currentScore}</div>
                </div>
            </div>
            <Body />
        </>
    );
}

export default App
