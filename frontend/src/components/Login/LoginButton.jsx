import {useAuth0} from '@auth0/auth0-react'
import "../../index.css"


export  function LoginButton(){
    
const {loginWithRedirect} = useAuth0()

    return <div>
        <button className="btn-custom" onClick={()=> loginWithRedirect()}>registrarse</button>
    </div>
}