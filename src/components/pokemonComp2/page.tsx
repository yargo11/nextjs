'client-side'

import Image from "next/image"
import Link from "next/link"

interface PokemonComp2Props {
    url: string
}

export async function PokemonComp2({ url }: PokemonComp2Props) {

    // await new Promise(resolve => setTimeout(resolve, 2000))

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${url}`, {
        cache: 'no-store',
    })

    const pokemon = await response.json()

    return (
        <div>
            <h3>{pokemon.species.name}</h3>

            <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.species.name}
                width={100}
                height={100}
            />
            <Link href="/pokedex">Voltar</Link>
        </div>
    )
}
