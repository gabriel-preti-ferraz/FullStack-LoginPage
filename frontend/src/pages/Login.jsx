import '../css/Login.css'
import { BsArrowRightShort, BsEye, BsEyeSlash } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react"

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
                    <div className='text-field'>
                        <input type="email" name="email" placeholder='E-mail' required value={email} onchange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='text-field'>
                        <input name="password" placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} type={visible ? "text" : "password"} />
                        <div className='eye' onClick={() => setVisible(!visible)}>
                            {visible ? <BsEye /> : <BsEyeSlash />}
                        </div>
                    </div>
                    <button type="submit">Log in <span><BsArrowRightShort /></span></button>
                </form>
                <h5 className='forgot-h5'><a href="/pass-recovery">Forgot password?</a></h5>
                <div className='divider'><span>or</span>
                </div>
                <button className='google'><span><FcGoogle /></span> Sign In with Google</button>
            </div>
        </div>
    )
}

export default Login