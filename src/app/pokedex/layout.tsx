import { ReactNode } from "react"

interface PokedexLayoutProps {
    children: ReactNode
}
export default function PokedexLayout({ children }: PokedexLayoutProps) {
    return (
        <div>
            <h1>Pokedex Layout</h1>
            {children}
        </div>
    )
}