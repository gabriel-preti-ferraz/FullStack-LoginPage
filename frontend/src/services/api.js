import axios from "axios"

export async function Register(username, email, password) {
    const response = await axios.post('http://localhost:8080/register', {username, email, password})
    return response.data
} 

export async function Login(email, password) {
    const response = await axios.post('http://localhost:8080/login', {email, password})
    return response.data
}