import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Connexion(){
    const [password, setPassword] = useState('')
    const nav = useNavigate()

    async function handleClick(){
        const response = await fetch("http://localhost:1337/api/auth/change-password", {
            headers: new Headers({
              "Content-Type": "application/json",
            }),
            method: "POST",
            body: JSON.stringify({
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
                <label htmlFor="oldPassword"></label>
                <input type="password" id="oldPassword" name="oldPassword" />

                <label htmlFor="newPassword">Password</label>
                <input type="password" id="newPassword" name="newPassword" onChange={(e) => setPassword(e.target.value)} />

                <label htmlFor="confirmation"></label>
                <input type="password" id="confirmation" name="confirmation" onChange={(e) => setPassword(e.target.value)} />

                <button onClick={handleClick}>Se connecter</button>
            </div>
        </div>
    )
}