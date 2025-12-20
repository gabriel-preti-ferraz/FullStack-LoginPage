import "../css/SignUp.css"
import { BsArrowRightShort, BsEye, BsEyeSlash } from "react-icons/bs"
import { useState } from "react"
import Wrapper from "../components/Wrapper"
import TextField from "../components/TextField"
import Button from "../components/Button"

function SignUp() {
    const [email, setEmail] = useState('')
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [visible, setVisible] = useState(false)
    const [visibleConfirm, setVisibleConfirm] = useState(false)
    const [checked, setChecked] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (password != passwordConfirm) {
            setError(`The passwords don't match!`)
            return
        }
        if (!checked) {
            setError("You must accept the Terms of Use and Privacy Policy.")
            return
        }
    }

    return (
        <Wrapper
            headerContent={<>
                <h1>Create account</h1>
                <h5>Already have an account? <a href="/login">Sign in</a></h5>
            </>}

            formProps={{onSubmit: handleSubmit}}
            
            formContent={<>
                <TextField
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                    name="user"
                    type="text"
                    placeholder="Username"
                    required
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />                

                <TextField
                    name="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={visible ? "text" : "password"}
                >
                    <div className='eye' onClick={() => setVisible(!visible)}>
                        {visible ? <BsEye /> : <BsEyeSlash />}
                    </div>
                </TextField>
                <TextField
                    name="confirm-password"
                    placeholder="Confirm your Password"
                    required
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    type={visibleConfirm ? "text" : "password"}
                >
                    <div className='eye' onClick={() => setVisibleConfirm(!visibleConfirm)}>
                        {visibleConfirm ? <BsEye /> : <BsEyeSlash />}
                    </div>
                </TextField>

                <label className="check-field">
                    <input type="checkbox" name="checkbox" onChange={(e) => setChecked(e.target.checked)}/>
                    <span></span>
                    <p>I agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a></p>
                </label>
            
                {error && <p  style={{ color: "red", fontSize: "0.9rem", marginTop: "4px", textAlign: "center" }}>{error}</p>}

                <Button
                    type="submit"
                    icon="right"
                    span={<BsArrowRightShort />}
                    text="Sign Up"
                />
            </>}
        />
    )
}

export default SignUp