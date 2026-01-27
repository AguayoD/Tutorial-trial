export default function ProductLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
         {children}
         <h1>Featured products</h1>
        </>
    )
}