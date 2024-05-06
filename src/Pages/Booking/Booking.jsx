import { useContext, useEffect, useState } from "react";
import { AuthProviderContext } from "../../Provider/Provider";

const Booking = () => {
    const {user} = useContext(AuthProviderContext) ;
    const [findData, setFindData] = useState([]);


    const url = `http://localhost:5000/bookings?email=${user.email}`;
    useEffect(() => {
        fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setFindData(data)
    })
    },[])
    console.log(findData)
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

export default Booking;