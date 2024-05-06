import { useContext, useEffect, useState } from "react";
import { AuthProviderContext } from "../../Provider/Provider";
import BookingTable from "./BookingTable";
import Swal from "sweetalert2";

const Booking = () => {
  const { user, loading } = useContext(AuthProviderContext);
  const [findData, setFindData] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFindData(data);
      });
  }, [url]);
  if (loading) {
    return <p> loading... </p>;
  }

  const handleDelete = (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (result.isConfirmed) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
                const remainning = findData.filter(booking => booking._id !== id);
                setFindData(remainning);
              }
        })
      });
}

const hanldeConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status : 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.modifiedCount > 0) {
                Swal.fire({
                  title: "Confirm !",
                  text: "Your file has been confirmed.",
                  icon: "success"
                });
                const remainning = findData.filter(booking => booking._id !== id);
                const updatedBooking = findData.filter(booking => booking._id === id);
                updatedBooking.status = 'confirm' ;
                const newBooking = [...remainning, updatedBooking]
                setFindData(newBooking);
              }
        })
}


//   console.log(findData);
  return (
    <div>
      <div>
        <p className="text-center my-10 font-bold underline ">
          My Booking Data {findData.length}{" "}
        </p>
      </div>

      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {findData?.map((booking) => (
            <BookingTable key={booking._id} booking={booking} handleDelete={handleDelete} hanldeConfirm={hanldeConfirm} >
              {" "}
            </BookingTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Booking;
