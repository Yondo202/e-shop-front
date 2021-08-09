import React from 'react'
import { useRouter } from "next/router"

const callback = () => {
    const router = useRouter();


    console.log(`router`, router)
    return (
        <div>
            <h1>facebook !</h1>
        </div>
    )
}

export default callback
