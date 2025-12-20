import axios from "axios"

export async function RegisterAPI(username, email, password) {
    const response = await axios.post('http://localhost:8080/register', {username, email, password})
    return response.data
} 

export async function LoginAPI(email, password) {
    const response = await axios.post('http://localhost:8080/login', {email, password})
    return response.data
}