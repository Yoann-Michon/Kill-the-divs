import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Connexion(){
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const nav = useNavigate()

    async function handleClick(){
        const response = await fetch("http://localhost:1337/api/auth/local", {
            headers: new Headers({
              "Content-Type": "application/json",
            }),
            method: "POST",
            body: JSON.stringify({
                "login":email ,
                "password":password
            }),
        })
        const data = await response.json()
        console.log('data: ',data);
        if (!data.error){
            data.token
            localStorage.setItem("jwt",data.token);
            nav("/home");
        }
    };

    return (
        <div>
            <h1>Connexion</h1>
            <div className="form">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleClick}>Se connecter</button>
            </div>
        </div>
    )
}