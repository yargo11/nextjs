import { PokemonComp } from "@/components/pokemonComp/page";
import Link from "next/link";

interface PokedexProps {
    name: string
    url: string
}

export default async function Pokedex() {

    const POKE_URL = 'https://pokeapi.co/api/v2/pokemon/'

    const response = await fetch(POKE_URL)

    const pokedex = await response.json()

    return (
        <>
            <ol style={{ width: '300px' }}>
                {pokedex.results.map((pokemon: PokedexProps) => {
                    return (
                        <li key={pokemon.name} >
                            <Link href={`/pokedex/pokemon/${pokemon.name}`} prefetch={false}>
                                <PokemonComp url={pokemon.url} />
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </>
    )
}