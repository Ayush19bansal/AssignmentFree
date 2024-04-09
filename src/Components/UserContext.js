import {createContext,useContext,useState} from "react"
import ayush from "../assests/AyushAi.png"
import Abhay from "../assests/abhay.jpeg"
import aman from "../assests/aman.jpeg"
import amit from "../assests/user1.jpg"


export const UserContextDemo=createContext({})

function UserContext(props){
    let arr=[
        {
            id:1,
            name:"Ayush Bansal",
            imgs:ayush,
            feedback:"Exceptional faculty who simplify complex concepts make this institute stand out for NEET preparation."
        },
        {
            id:2,
            name:"Amit Jha",
            imgs:amit,
            feedback:"The extensive practice material provided here greatly enhances confidence for tackling NEET questions."
        },
        {
            id:3,
            imgs:aman,
            name:"Aman Sharma",
            feedback:"A nurturing environment coupled with personalized attention fosters optimal learning and growth for NEET aspirants."
        },
        {
            id:4,
            imgs:Abhay,
            name:"Abhay Singh",
            feedback:"The institute's proven track record of high success rates underscores its effectiveness in NEET preparation."
        },

    ]
    const [data,setdata]=useState([]);

    return(
        <UserContextDemo.Provider value={{data,setdata,arr}}>
{props.children}
        </UserContextDemo.Provider>
    )
}

export const Getctx=()=>{
    const ctx =useContext(UserContextDemo);
    return ctx
}

export default UserContext;