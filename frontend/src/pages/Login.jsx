import '../css/Login.css'
import { BsArrowRightShort, BsEye, BsEyeSlash } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react"
import TextField from "../components/TextField"
import Button from "../components/Button"

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [visible, setVisible] = useState('')

    return (
        <div className='login-wrapper'>
            <div className='login-card'>
                <h1>Log in to <br />your account</h1>
                <h5>Don't have an account? <a href="/signup">Sign up</a></h5>
                <form action="">
                    <TextField
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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

                    <Button
                        type="submit"
                        icon="right"
                        span={<BsArrowRightShort />}
                        text="Log in"
                    />
                </form>
                <h5 className='forgot-h5'><a href="/pass-recovery">Forgot password?</a></h5>
                <div className='divider'><span>or</span></div>
                <Button
                    className="google"
                    icon="left"
                    span={<FcGoogle />}
                    text="Sign In with google"
                />
            </div>
        </div>
    )
}

export default Login