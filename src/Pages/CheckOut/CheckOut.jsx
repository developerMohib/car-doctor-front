import { Link, useLoaderData, useParams} from "react-router-dom";
import Banner from "../../Components/Banner";
import { useContext } from "react";
import { AuthProviderContext } from "../../Provider/Provider";
import Swal from "sweetalert2";

const CheckOut = () => {
  const {user} = useContext(AuthProviderContext)
  const parts = useLoaderData() ;
  const {id} = useParams();
  console.log(parts, 'parst');

  const handleConfirmed = (e) => {
    e.preventDefault() ;
    const productName = e.target.name.value;
    const date = e.target.date.value;
    const phone = e.target.phone.value;
    const amount = e.target.amount.value;
    const name = user?.name ;
    const email = user?.email ;
    const order = {productName, date, phone, amount, name, email}
    console.log(order)

    // send data 
    fetch('http://localhost:5000/bookings', {
      method : 'POST',
      headers : {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          icon: "success",
          title: "success",
          text: "Order has been taken!",
        });
      }
      
    })
  }

  return (
    <div>
      <div className="relative my-10">
        <Banner> </Banner>
        <div className=" bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] absolute h-full w-full top-0 left-0">
          <h1 className="font-bold text-2xl text-white absolute left-[10%] top-1/2 ">
            Check Out
          </h1>
        </div>
        <div className="text-xl items-center justify-center py-0 flex breadcrumbs mx-auto">
          <ul className="bg-[#FF3811] px-5 rounded-lg ">
            <li>
              <Link className="text-white"> Home </Link>
            </li>
            <li className="text-white ">Check Out </li>
          </ul>
        </div>
      </div>

      {/* from */}
      <div className="bg-base-300 p-10 w-4/5 mx-auto rounded-lg ">
        <p> Product id : {id} </p>
        <form onSubmit={handleConfirmed} className="space-y-3" >
          <div className="flex gap-5">
            <div className="w-1/2">
              <label className="w-full" htmlFor="name">
                Product Name
              </label>
              <input className="w-full p-2 rounded-lg" type="text" name="firstName" id="name" />
            </div>
            <div className="w-1/2">
              <label className="w-full" htmlFor="date">
                Date
              </label>
              <input className="w-full p-2 rounded-lg" type="date" name="date" id="date" />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-1/2">
              <label className="w-full" htmlFor="phone">
                Your Phone
              </label>
              <input className="w-full p-2 rounded-lg" type="number" name="phone" id="phone" />
            </div>
            <div className="w-1/2">
              <label className="w-full" htmlFor="amount">
                Amount
              </label>
              <input placeholder="set defult value" className="w-full p-2 rounded-lg" type="number" name="amount" id="amount" />
            </div>
          </div>
          <div>
            <label className="w-full" htmlFor="text">
              Messege
            </label>
            <textarea className="w-full p-2 rounded-lg" name="textarea" id="text">
              Messegae
            </textarea>
          </div>
          <div>
            <input className="btn bg-[#ff3811] text-white w-full " type="submit" value="Order Confirmed" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
