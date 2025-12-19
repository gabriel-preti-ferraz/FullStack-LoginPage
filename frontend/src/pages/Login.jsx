import '../css/Login.css'

function Login() {
    return (
        <div className='login-wrapper'>
            <div className='login-card'>
                <h1>Log in to <br />your account</h1>
                <h5>Don't have an account? <a href="">Sign up</a></h5>
                <form action="">
                    <div className='text-field'>
                        <input type="email" name="email" placeholder='E-mail' required/>
                    </div>
                    <div className='text-field'>
                        <input type="password" name="password" placeholder='Password' required/>
                    </div>
                    <button type="submit">Login</button>
                </form>
                <h4><a href="">Forgot password?</a></h4>
                <p>------or-----</p>
                <button className='google'><img src=""/> Sign In with Google</button>
            </div>
        </div>
    )
}

export default Login

// TODO: OR paragraph
// TODO: Google logo
// TODO: Sign up href
// TODO: Forgot password href