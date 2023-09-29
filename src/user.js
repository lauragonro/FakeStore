import React from 'react';
import {useState, useEffect} from "react";

export default function User() {
    const [user, setUsers] = useState();

    useEffect(() => {
        fetch("https://fakestoreapi.com/users/10")
        .then((response) => response.json())
        .then((data) => setUsers(data));     
    }, []);

    return (
        <>
        {user ? (
            <div className="User">
                <h3>{user.name.firstname.charAt(0)}{user.name.lastname.charAt(0)}</h3>
            </div>
        ):(
            <div className="User"> 
                <h3>nn</h3>
            </div>
            
        )
        }
        </>
    );
}