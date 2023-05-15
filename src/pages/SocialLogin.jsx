import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SocialLogin = () => {
    const {googleUser} = useContext(AuthContext)
    const googleHandler = () => {
        googleUser()
        .then(result => {
  
        })
        .then(error => {
          
        })
      }
  return (
    <div className="mx-auto py-2">
      <div className="divider">OR</div>
      <button onClick={googleHandler} className="btn btn-circle btn-outline">
       G
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        
      </button>
    </div>
  );
};

export default SocialLogin;
