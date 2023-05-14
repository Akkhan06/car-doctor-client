import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://car-doctor-server-akkhan06.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    })
    return (
        <div className="mt-20">
           <div className=" text-center w-1/2 mx-auto">
           <h2 className="text-2xl font-semibold  text-warning">Services</h2>
            <h1 className="text-5xl font-bold my-3 text-black">Our Service Area</h1>
            <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
           </div>

           <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-14">
            {
                services?.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            }
           </div>
        </div>
    );
};

export default Services;