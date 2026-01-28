import Link from "next/link"

export const metadata = {
    title: 'Products',
    description: 'This is the products page description'
    }

export default function ProductList(){
    const productId = 100
    return (
        <>
            <Link href = "/">Home</Link>
            <h1>Product List</h1>
            <h2><Link href= "/order-product">Order Product</Link></h2>
            <h2><Link href= "products/1">Product 1</Link></h2>
            <h2><Link href= "products/2">Product 2</Link></h2>
            <h2><Link href= "products/3" replace>Product 3</Link></h2> {/*replace takes you to the home page when you press back*/}
            <h2><Link href = {`products/${productId}`}>Product {productId}</Link></h2>
        </>
    );
}