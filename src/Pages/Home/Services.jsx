import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
  const Services = () => {
    const[services, setServices] = useState([]);
    
    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    })
 



    return (
        <div className="mt-4">
          <div>
             <h2 className="text-3xl text-center text-orange-600">Our Services</h2>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quae hic laudantium ex dolore itaque consequuntur corporis rem repellat debitis iure delectus reprehende </p>
 
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 gap-6">
            {
                services.map(service => <ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)
            }
          </div>
         </div>
    );
};

export default Services;