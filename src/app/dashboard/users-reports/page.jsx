import styled from "./page.module.css"

export default async function Page() {
    const response = await fetch('http://localhost:3000/api/users')
    
    return (
        <div>
            Users Reports Page
        </div>
    )
}