import { Client } from 'pg'

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: "5432",
    password: "admin",
    database: "UserManagementSystem"
})

client.connect().then(() => console.log("Database connected"))