import Image from "next/image"

export async function Pikahcu() {

    // await new Promise(resolve => setTimeout(resolve, 2000))

    const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')

    const pokemon = await response.json()

    return (
        <div>
            <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={100}
                height={100}
            />
        </div>
    )
}
