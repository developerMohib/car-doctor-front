
// import { TiDeleteOutline } from "react-icons/ti";

const BookingTable = ({ booking, handleDelete, hanldeConfirm }) => {
  // console.log(name, 'fomr b ooking ')
  const {name, amount, date, email, phone, _id, img,pName,status } = booking;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle btn-outline btn-sm "
        >
          {/* <TiDeleteOutline> </TiDeleteOutline> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={img}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">
              {" "}
              <h1 className="font-semibold text-xl">
                {" "}
                {name}{" "}
              </h1>{" "}
            </div>
            <div className="text-sm opacity-50"> {phone} </div>
          </div>
        </div>
      </td>
      <td>{pName}</td>
      <td>{email}</td>
      <td> $ {amount} </td>
      <td> {date} </td>
      <th>
        {status === "confirm" ? (
          <span className="text-2xl ">Confirmed</span>
        ) : (
          <button
            onClick={() => hanldeConfirm(_id)}
            className="btn btn-outline "
          >
            {" "}
            please Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingTable;
