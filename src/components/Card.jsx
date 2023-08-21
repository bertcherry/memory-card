export default function Card({ heroName, heroImg }) {
    //consider running the images as a srcset depending on device size
    return (
        <button className='hero-card' aria-label={heroName}>
            <h2>{heroName}</h2>
            <div className="img-container">
                <img src={heroImg} alt={heroName} />
            </div>
        </button>
    )
}