import TextField from "../components/TextField"
import { useState } from 'react'

function Test() {
    const [password, setPassword] = useState('')
    const [visible, setVisible] = useState('')

    return (
        <form action="">
            <TextField
                name="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={visible ? "text" : "password"}
            />
        </form>
    )
}

export default Test