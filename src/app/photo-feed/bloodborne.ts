import type {StaticImageData} from "next/image"
import photo1 from "./photos/amygdala.jpg"
import photo2 from "./photos/Eileen.jpg"
import photo3 from "./photos/gehrman.jpg"
import photo4 from "./photos/ladymaria.jpg"
import photo5 from "./photos/the doll.jpg"
import photo6 from "./photos/the hoonter.jpg"
import photo7 from "./photos/the old one.jpg"

export type Bloodborne = {
    id : string
    name : string
    src : StaticImageData
    photographer : string
    location : string
};

const bloodBorne : Bloodborne[] = [
     {
        id : "1",
        name : "Amygdala",
        src : photo1,
        photographer : "The Hunter",
        location : "The Cathedral",
     },

     {
        id : "2",
        name : "Eileen",
        src : photo2,
        photographer : "The Hunter",
        location : "The Slums",
     },
     {
        id : "3",
        name : "Gehrman",
        src : photo3,
        photographer : "The Hunter",
        location : "The Hunter's Dream",
     },
     {
        id : "4",
        name : "Lady Maria",
        src : photo4,
        photographer : "The Hunter",
        location : "The Clock Tower",
     },
     {
        id : "5",
        name : "The doll",
        src : photo5,
        photographer : "The Hunter",
        location : "The Hunter's Dream",
     },
     {
        id : "6",
        name : "The Hunter",
        src : photo6,
        photographer : "Gehrman",
        location : "The waking world",
     },
     {
        id : "7",
        name : "The Old one, Moon Presence",
        src : photo1,
        photographer : "Gerhman at his grave",
        location : "The Hunter's Dream",
     }
]

export default bloodBorne;