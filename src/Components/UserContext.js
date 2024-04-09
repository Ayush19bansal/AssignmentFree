import {createContext,useContext,useState} from "react"

export const UserContextDemo=createContext({})

function UserContext(props){
    let arr=[
        {
            id:1,
            name:"Ayush Bansal",
            feedback:"Exceptional faculty who simplify complex concepts make this institute stand out for NEET preparation."
        },
        {
            id:2,
            name:"Amit Jha",
            feedback:"The extensive practice material provided here greatly enhances confidence for tackling NEET questions."
        },
        {
            id:3,
            name:"Aman Sharma",
            feedback:"A nurturing environment coupled with personalized attention fosters optimal learning and growth for NEET aspirants."
        },
        {
            id:4,
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