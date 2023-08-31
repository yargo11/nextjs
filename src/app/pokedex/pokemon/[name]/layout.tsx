import { ReactNode } from "react"

interface PokemonIDLayoutProps {
    children: ReactNode
}
export default function PokemonID({ children }: PokemonIDLayoutProps) {
    return (
        <div>
            <h1>Pokemon Layout</h1>
            {children}
        </div>
    )
}