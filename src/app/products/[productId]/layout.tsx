export const metadata = {
    title: 'Product',
    description: 'This is the product page description',
};


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