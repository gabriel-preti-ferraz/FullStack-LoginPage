import { useState } from "react"
import TextField from "./TextField"
import { BsEye, BsEyeSlash } from "react-icons/bs"

function PasswordField({ label, ...props }) {
    const [visibility, setVisibility] = useState(false)

    return (
        <TextField
            type={visibility ? "text" : "password"}
            label={label}
            {...props}>
            <div className='eye' onClick={() => setVisibility(prev => !prev)}>
                {visibility ? <BsEye /> : <BsEyeSlash />}
            </div>
        </TextField>
    )
}

export default PasswordField