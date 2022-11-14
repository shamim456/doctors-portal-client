import React from "react";
import quote from "../../../assets/icons/quote.svg";
import Student1 from "../../../assets/images/people1.png";
import Student2 from "../../../assets/images/people2.png";
import Student3 from "../../../assets/images/people3.png";
import TestimonialCard from "./TestimonialCard";
const PatientsTestimonial = [
  {
    id: 1,
    name: "Winson Herry",
    address: "Faridpur",
    image: Student1,
    comment:
      "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
  },
  {
    id: 2,
    name: "Siam Ahmed",
    address: "Khulna",
    image: Student2,
    comment:
      "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
  },
  {
    id: 3,
    name: "Rahmat Ali",
    address: "Barisal",
    image: Student3,
    comment:
      "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
  },
];
const TestimonialHomePage = () => {
  return (
    <section className="w-11/12 mx-auto mt-20">
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl font-bold text-primary">Testimonial</h3>
          <h2 className="text-4xl font-bold">What Our Patients Says</h2>
        </div>
        <div>
          <img src={quote} alt="quote" className="w-48" />
        </div>
      </div>

      <div className="grid grid-cols-3 w-11/12 mx-auto">
        {PatientsTestimonial.map((review) => (
          <TestimonialCard key={review.id} review={review}></TestimonialCard>
        ))}
      </div>
    </section>
  );
};

export default TestimonialHomePage;
