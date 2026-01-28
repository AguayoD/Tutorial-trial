export const metadata = {
    title: 'Product',
    description: 'This is the product page description',
};

function getRandomInt (count : number) {
    return Math.floor(Math.random() * count );
}


export default function ProductLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const random = getRandomInt(1);
    
    if (random === 1){
        throw new Error("Error Loading Product");
    }

    return (
        <>
         {children}
         <h1>Featured products</h1>
         {/* may put a carousel here*/}
        </>
    )
}