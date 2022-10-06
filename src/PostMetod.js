import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
export const PostMetod = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('')


    function postVal() {
        const data = { name, email, status }
        if(data.name ==='' || data.email ==='' || data.username==='') alert("Please fill all field")
        fetch('http://demo2211087.mockable.io/mock', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(result => result.json().then(res => console.log(res)))
    }

    return (<div style={{marginLeft:"1em"}}>
        <p>After click submit please open console to chek POST method</p>
        <input type={'text'} value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" /> <br /><br />
        <input type={'text'} value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Enter email"/> <br /><br />
        <input type={'text'} value={status} onChange={(e) => setStatus(e.target.value)}  placeholder="Enter state"/> <br /><br />
        <Button type='submit' onClick={postVal}>submit</Button>
    </div>);

}
