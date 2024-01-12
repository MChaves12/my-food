import React from "react";

const MenuItem = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center transition-all hover:bg-white hover:shadow-xl">
        <div className="text-center">
            <img src="/images/pizza.png" className="max-h-auto max-w-24 block mx-auto" alt="pizza" />
        </div>
      <h4 className="font-semibold my-3 text-xl ">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
        Add to cart $12
      </button>
    </div>
  );
};

export default MenuItem;
