export const metadata = {
  title: {
    absolute:'',
    default:'Home Page | BCAS',
    template: '%s | BCAS',
  },
  description: 'This is the home page description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header style={{
            backgroundColor: "green",
            padding: "1rem", 
          }}
          >
          <p>Header</p>
        </header>
        {children}
        <footer style={{
          background: "ghostwhite",
          padding: "1rem",
        }}
        >
          <p>Footer</p>
        </footer>
        </body>
    </html>
  )
}
