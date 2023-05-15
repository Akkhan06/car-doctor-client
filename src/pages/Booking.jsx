import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import BookingCard from "./BookingCard";

const Booking = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/checkout_user?email=${user?.email}`;

  const [bookingProducts, setBookingProducts] = useState([]);
  // const [lodding, setLodding] = useState(false);
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer, ${localStorage.getItem('access-token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setBookingProducts(data)
        }
      });
  }, [/*lodding*/]);

  const delateHandler = (id) => {
    fetch(`https://car-doctor-server-akkhan06.vercel.app/checkout_all/${id}`,{
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
        const finalResult = bookingProducts.filter(x => x._id !== id)
        setBookingProducts(finalResult)
    })
  }

  const confromHandler = id => {
    fetch(`https://car-doctor-server-akkhan06.vercel.app/checkout_all/${id}`,{
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({status: 'confirm'})
    })
    .then(res => res.json())
    .then(doc => {
      console.log(doc)
      if (doc.modifiedCount > 0) {
        const remaning = bookingProducts.filter(x => x._id !==id)
        const updated = bookingProducts.find(x => x._id === id)
        console.log(remaning)
        updated.status = 'confirm'
        const newBooking = [...remaning, updated]
        setBookingProducts(newBooking)

        // setLodding(!lodding)

      }
    })
  }

  console.log(bookingProducts)
  return (
    <>
      <div
        className="hero rounded-lg"
        style={{ backgroundImage: `url("https://img.freepik.com/free-photo/mechanic-changing-engine-oil-car-vehicle_342744-260.jpg?w=740&t=st=1683957220~exp=1683957820~hmac=7faa169bfa64f503b74ad36c2f7e554509d6ca23e1145c01cff576025e58779c")` }}
      >
        <div className="hero-overlay bg-opacity-60">
          {" "}
          <h1 className=" text-white ml-6 py-20 text-start font-bold">
         <span className="text-5xl"> Cart Details</span> <br />
          <span className="font-semibold text-warning">Home - Product Details</span>
          </h1>
          
        </div>
        <div className="hero-content text-neutral-content"></div>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Delete</th>
              <th>Image</th>
              <th>Service</th>

              <th>Price</th>
              <th>Data</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            {bookingProducts?.map((booking) => (
              <BookingCard key={booking._id} booking={booking} confromHandler={confromHandler} delateHandler={delateHandler}></BookingCard>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Booking;
