import { Pikahcu } from "@/components/pikachu/page";
import Link from "next/link";

export const revalidate = 30

export default function Home() {

    return (
        <div>
            <h2>Hello Chapter!!!</h2>
            <Pikahcu />
            <Link href="/pokedex">Link</Link>
        </div>

    )
}
