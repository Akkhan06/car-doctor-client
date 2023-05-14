import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const CheckOut = () => {
  const {user} = useContext(AuthContext)
  const useres = useLoaderData();
  const { img, title, service_id, price } = useres;


  const checkOutHandler = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const comment = form.comment.value;

    const checkoutInfo = {name, date, phone, email, comment, img, title, service_id, price}
    console.log(checkoutInfo)

    fetch('https://car-doctor-server-akkhan06.vercel.app/checkout_all/', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(checkoutInfo)
    })
    .then(res => res.json())
    .then(data => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your product in panding',
            showConfirmButton: false,
            timer: 1500
          })
        console.log(data)
    })
  }
  return (
    <div>
      <div
        className="hero rounded-lg"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="hero-overlay bg-opacity-60"> <h1 className="text-5xl text-white ml-6 py-20 text-start font-bold">Check Out</h1> </div>
        <div className="hero-content text-neutral-content">
          
        </div>
      </div>

      <section className="bg-[#F3F3F3] dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <form onSubmit={checkOutHandler} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <input
                  type="text"
                  name="name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Product name"
                  defaultValue={title}
                />
              </div>
              <div>
                <input
                  type="date"
                  name="date"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                 
                  required
                />
              </div>

              <div>
                <input
                  type="number"
                  name="phone"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Your phone"
                  defaultValue={"018"+Math.floor(Math.random() * 1000000) + 1}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  className="block lowercase p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Your email"
                  defaultValue={user?.email}
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <textarea
                id="message"
                name="comment"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <input type="submit" className="btn btn-block bg-warning text-white border-none" value="submit" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default CheckOut;
