import React from "react";

const TestimonialCard = ({ review }) => {
  const { name, address, image, comment } = review;
  return (
    <section className="w-96 text-justify shadow-2xl p-5 font-semibold mt-20">
      <div>
        <p>{comment}</p>
      </div>
      <div className="flex items-center mt-7">
        {/* <img src={image} alt="" /> */}
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={image} alt='peapole' />
          </div>
        </div>
        <div className="ml-6">
          <p>{name}</p>
          <p className="font-light">{address}</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCard;
