import Card from "./Card"

export default function HeroCards({heroData, handlePlay}) {
    const cards = heroData.map(hero => {
        return (
            <Card key={hero.id} heroId={hero.id} heroName={hero.name} heroImg={hero.images.md} handlePlay={handlePlay}/>
        )
    });

    return (
        <section className="card-section" aria-label="hero cards">
            {cards}
        </section>
    )
}