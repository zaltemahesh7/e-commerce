import React from "react";

export default function Catagories() {
  const slides = [
    {
      path: "/images/Biryani.avif",
    },
    {
      path: "/images/burger.avif",
    },
    {
      path: "/images/cake.avif",
    },
    {
      path: "/images/Chinese.avif",
    },
    {
      path: "/images/chocolate icecream.avif",
    },
    {
      path: "/images/chole bhature.avif",
    },
    {
      path: "/images/kebabs.avif",
    },
    {
      path: "/images/Khichdi.avif",
    },
    {
      path: "/images/Momos.avif",
    },
    {
      path: "/images/Noodles.avif",
    },
    {
      path: "/images/North Indian.avif",
    },
    {
      path: "/images/Paratha.avif",
    },
    {
      path: "/images/pasta.avif",
    },
    {
      path: "/images/pastry.avif",
    },
    {
      path: "/images/Pav Bhaji.avif",
    },
    {
      path: "/images/Pizzas.avif",
    },
    {
      path: "/images/Pute Veg.avif",
    },
    {
      path: "/images/Rolls.avif",
    },
    {
      path: "/images/Salad-1.avif",
    },
    {
      path: "/images/shawarma.avif",
    },
  ];
  return (
    <div className=" mx-8">
      <h1 className=" text-3xl m-4">What's on your mind?</h1>
      <div className="flex overflow-scroll ">
        {slides.map((item, index) => {
          return <img key={index} src={item.path} alt="" width={200} />;
        })}
      </div>
    </div>
  );
}
