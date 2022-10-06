import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

export const User = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then(result => result.json()
            .then(res => setData(res)))
    }, [])

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(item =>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.username}</td>
                        </tr>
                    )
                }
            </tbody>
        </Table>

    )
}
