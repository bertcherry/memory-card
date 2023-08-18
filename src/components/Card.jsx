export default function Card({ heroName, heroImg }) {
    //consider running the images as a srcset depending on device size
    return (
        <div className='hero-card'>
            <h2>{heroName}</h2>
            <div className="img-container">
                <img src={heroImg} alt={heroName} />
            </div>
        </div>
    )
}