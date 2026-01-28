import Link from "next/link"

export const metadata ={
    title : 'About us',
    description : 'This is the about us description',
}

export default function aboutus(){
    return ( 
    <><h1>About Us</h1>
    <Link href = "/">Home</Link>
    </>
    )
}