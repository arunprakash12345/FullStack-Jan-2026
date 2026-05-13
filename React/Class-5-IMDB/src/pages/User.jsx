import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const User = ({ isAdmin }) => {
    const [user, setUser] = useState(null);
    const params = useParams();
    console.log({ params, isAdmin });

    const fetchUserDetail = async () => {
        const resp = await fetch(`https://fakestoreapi.com/users/${params.id}`);
        const userData = await resp.json();
        console.log(userData);
        setUser(userData);
    };

    useEffect(() => {
        fetchUserDetail();
    }, []);

    if (!user) {
        return <h3>Loading...</h3>
    }

    return (
        <>
            <h4>User Name: {user.username}</h4>
            <h3>Name: {user.name.firstname} {user.name.lastname}</h3>
            <h4>Phone: {user.phone}</h4>
        </>
    );
};

export default User;