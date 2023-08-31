'client-side'

import Image from "next/image"

interface PokemonCompProps {
    url: string
}

export async function PokemonComp({ url }: PokemonCompProps) {

    // await new Promise(resolve => setTimeout(resolve, 2000))

    const response = await fetch(url, {
        cache: 'no-store',
    })

    const pokemon = await response.json()

    return (
        <div>
            <h3>{pokemon.name}</h3>
            <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={100}
                height={100}
            />
        </div>
    )
}
