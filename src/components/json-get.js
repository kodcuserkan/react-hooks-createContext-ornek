import React, { useState, useEffect } from 'react';
import axios from 'axios';

function JsonGet() {

    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [IdSetter, setIdSetter] = useState(id);

    const handleClick = () => {
        setIdSetter(id);
    }

    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${IdSetter}`)
            .then(res => setPost(res.data))
            .catch(err => console.log('Hata: ', err));
    },[IdSetter]);

  
    return (
        <div>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)}/> 
            <button type="button" onClick={handleClick}> Getir </button>
            <br/>
            <ul>
                <li key="2">{post.title}</li>
                <li key="3">{post.body}</li>
            </ul>
        </div>
    )
}

export default JsonGet;
