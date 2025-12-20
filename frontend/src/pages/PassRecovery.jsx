import { useState } from "react"
import "../css/PassRecovery.css"
import TextField from "../components/TextField"
import Button from "../components/Button"
import Divider from "../components/Divider"

function PassRecovery() {
    const [email, setEmail] = useState('')

    return (
        <div className='recovery-wrapper'>
            <div className='recovery-card'>
                <h1>Forget Password</h1>
                <form action="">
                    <TextField
                        label="Enter your e-mail address to continue"
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button type="submit" text="Continue"/>
                </form>
                <Divider text="or" />
                <p id="return">Return to the <a href=" /login">login page</a></p>
            </div>
        </div>
    )
}

export default PassRecovery