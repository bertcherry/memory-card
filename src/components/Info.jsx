export default function Info({playState, handleStart, handleReset}) {
    if (playState === 'won') {
        return (
            <>
                <p>Congratulations, you won!</p>
                <button onClick={handleReset}>Reset Game</button>
            </>
    )} else if (playState === 'lost') {
        return (
            <>
                <p>Oops, you selected the same hero twice.</p>
                <button onClick={handleStart}>Play Again</button>
            </>
    )} else {
        return (
            <>
                <p>Click each picture only once! The heroes are always on the move and will reshuffle between each click. Try to get all nine. Good luck!</p>
                <button onClick={handleStart}>Play</button>
            </>
        )
    }
}
