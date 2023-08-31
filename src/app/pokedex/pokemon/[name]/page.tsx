import { PokemonComp2 } from "@/components/pokemonComp2/page";
import Link from "next/link";

interface PokemonProps {
    params: {
        name: string
    }
    species: {
        name: string
    }
    sprites: {
        front_default: string
    }
}

export default async function Pokemon({ params }: PokemonProps) {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)

    const pokemon = await response.json()

    return (
        <div>
            <PokemonComp2 url={pokemon.species.name} />
        </div>
    )
}