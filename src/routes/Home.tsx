import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Home() {
    const jwt = localStorage.getItem('jwt')
    const nav = useNavigate()

    useEffect(()=>{
        const checkToken = async () => {
            if (jwt== null){
                nav("/")
            }else{
                const response = await fetch("http://localhost:1337/api/users/me", {
                    headers: new Headers({
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + jwt,
                    }),
                    method: "GET"
                })
                console.log('response', response);
                
                if (response.status !== 200){
                    nav("/")
                }
            }
            
            
        }
        checkToken()
    }, [])

    return (
        <div>
            <h1>Home</h1>
            <div className="connected-status">
                Je suis connecté
            </div>
            <div className="connected-data">
                <div className="title">jwt :</div>
                <div className="value">{jwt}</div>
            </div>
            <Link to={'/'}>go to home</Link>
        </div>
    )
}