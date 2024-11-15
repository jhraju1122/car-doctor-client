import React from 'react';

const ServiceCard = ({service}) => {
     const {img, title, price} = service;
  

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src= {img}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p className='text-xl text-orange-600'>price: {price}</p>
  
  </div>
</div>
    );
};

export default ServiceCard;