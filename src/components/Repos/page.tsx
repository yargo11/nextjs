export async function Repos() {

    const response = await fetch('https://api.github.com/users/yargo11/repos', {
        cache: "no-store"
    })

    const repos = await response.json()

    return (
        <pre>
            {JSON.stringify(repos, null, 2)}
        </pre>
    )
}