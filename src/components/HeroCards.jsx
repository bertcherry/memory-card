import Card from "./Card"

export default function HeroCards({heroData}) {
    const cards = heroData.map(hero => {
        return (
            <Card key={hero.id} heroName={hero.name} heroImg={hero.images.md}/>
        )
    });

    return (
        <section className="card-section" aria-label="hero cards">
            {cards}
        </section>
    )
}