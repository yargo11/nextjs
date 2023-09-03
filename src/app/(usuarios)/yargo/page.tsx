import { Repos } from "@/components/Repos/page"
import { User } from "@/components/User/page"
import Link from "next/link"

export default function Yargo() {

    return (
        <div>
            <Link href="/">Voltar</Link>
            <h2>User</h2>
            <User />
            <h2>Repo</h2>
            <Repos />
        </div>
    )
}