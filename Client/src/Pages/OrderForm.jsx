import React from "react";

const OrderForm = () => {
  return (
    <div className="bg-white flex-1 mx-auto max-w-[600px] rounded-xl h-fit mt-20 p-10">
      <input
        type="text"
        placeholder="enter Quantity"
        className="border rounded-2xl p-3 w-full mt-2 mb-3"
      />
      <input
        type="text"
        placeholder="Address"
        className="border rounded-2xl p-3 w-full mt-2 mb-3"
      />
      <input
        type="text"
        placeholder="contact"
        className="border rounded-2xl p-3 w-full mt-2 mb-3"
      />
      <button className="active:scale-95 w-full mt-4 flex-1 text-center py-3 bg-gradient-to-r  from-[#0048aa] to-[#1586e2] rounded-2xl text-white">
        Submit
      </button>
    </div>
  );
};

export default OrderForm;
