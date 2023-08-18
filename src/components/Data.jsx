import { useEffect } from "react";

export default function Data() {
    let heroData = [];

    useEffect((heroData) => {
        const heroIds = [107, 275, 309, 480, 522, 567, 579, 638, 720];
        let mounted = true;

        const fetchData = async (heroId) => {
            const response = await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/' + heroId + '.json');
            const data = await response.json();
            if (mounted) {
                heroData.push(data);
            }   
        };

        heroIds.forEach(heroId => {
            fetchData(heroId);
        });

        return () => mounted = false;
        
    }, []);

    return heroData;
}