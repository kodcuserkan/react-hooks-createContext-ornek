import React, { useEffect, useState } from 'react';
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts/93';


function FetchData1() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [ post, setPost] = useState({});
    

    useEffect(() => {
        console.log("useeffect çalıştı");
        setLoading(true);
        axios.get(url)
            .then(
                res => {
                    setLoading(false);
                    setPost(res.data);
                }
            )
            .catch(err => {
                setError("Hata : " + err);
                console.log(err);
                setLoading(false);
            });
    },[]);

    console.log(post);

    return (
        <div>
            {
                loading ? <div><b>Yükleniyor...</b></div> :
                <div>
                    {
                        error === "" ? 
                            <div> <p><b>Post Başlık:</b> {post.title}</p><p><b>Post Metin: </b>{post.body} </p> </div> : 
                            <b>{error}</b>
                    }
                </div>
            }
        </div>
    )
}

export default FetchData1;
