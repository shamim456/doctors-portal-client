import React from "react";
import homeBannerImg from '../../assets/images/chair.png'

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={homeBannerImg}
          alt="chair"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="w-3/6">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorem nihil temporibus aliquam, omnis voluptate facere delectus eius numquam provident!
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
