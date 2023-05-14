import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from "../../assets/images/login/login.svg"
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.config';
const auth = getAuth(app)
const Register = () => {

    const navigate = useNavigate()

    const registerHandler = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const userProfile = result.user
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Now you have a account, and please login',
                showConfirmButton: false,
                timer: 1500
              })

              navigate('/login')
        })
        .catch(error => {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: `<a href="">'${error}'</a>`
              })
        })
    }
    return (
        <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-8">
            <img src={image} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={registerHandler} className="card-body">
                <h1 className="text-4xl font-bold">Sign Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  name='name'
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name='email'
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name='password'
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-warning" type="submit" value="Login" />
              </div>
              <h1 className="font-semibold text-center">You have an account? <Link className="text-red-600 text-bold" to="/login">Login</Link></h1>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;