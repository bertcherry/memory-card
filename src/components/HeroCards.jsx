import Card from "./Card"

export default function HeroCards({heroData}) {
    return (
        <section className="card-section" aria-label="hero cards">
            {heroData.map(hero => {
                return (
                    <Card key={hero.id} heroName={hero.name} heroImg={hero.images.md}/>
                )
            })}
        </section>
    )
}