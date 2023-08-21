export default function Card({ heroId, heroName, heroImg, handlePlay }) {
    //consider running the images as a srcset depending on device size
    return (
        <button className='hero-card' id={heroId} aria-label={heroName} onClick={() => handlePlay(heroId)}>
            <h2>{heroName}</h2>
            <div className="img-container">
                <img src={heroImg} alt={heroName} />
            </div>
        </button>
    )
}