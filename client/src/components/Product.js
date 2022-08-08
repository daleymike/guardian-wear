import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Product = () => {
    const [message, setMessage] = useState("Loading...")

    useEffect(() => {
        axios.get("http://localhost:8000/api")
        .then(res => setMessage(res.data.message))
        .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <h3>Message : {message}</h3>
        </div>
    )
}

export default Product;