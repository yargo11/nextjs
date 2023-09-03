import { cookies, headers } from 'next/headers'

export async function User() {

    const response = await fetch('https://api.github.com/users/yargo11', {
        cache: "no-store"
    })

    const user = await response.json()

    // const userCookies = cookies()
    // const userHeader = headers()

    return (
        <div>
            {/* {JSON.stringify(userCookies, null, 2)}
            {JSON.stringify(userHeader, null, 2)} */}
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>
        </div>
    )
}