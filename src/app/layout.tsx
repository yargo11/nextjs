export const metadata = {
  title: 'Chapter',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <h1>Chapter Next.js</h1>
        {children}
      </body>
    </html>
  )
}
