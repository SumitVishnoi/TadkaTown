import React from "react";

const FCard = ({name, categ, img}) => {
  return (
    <div className="w-75 rounded-3xl bg-[#7E8F2E] p-4 relative font-sans text-white shadow-md shadow-[#7E8F2E]">
      <div className="rounded-2xl h-60 overflow-hidden">
        <img
          src={img}
          className="w-full h-80 object-cover hover:scale-110 transition-all ease duration-200"
          alt="Jeera Chawal"
        />
      </div>

      <div className="absolute top-5 right-5 bg-white text-[#7E8F2E] rounded-full px-4 py-2 text-center text-xs font-semibold leading-tight shadow lg:-mr-10">
        PRICE
        <br />
        <span className="text-base font-bold">₹180</span>
        <span className="line-through text-gray-400 text-xs ml-1">₹200</span>
      </div>

      <div className="mt-4 px-2">
        <p className="text-sm italic opacity-80">{categ}</p>
        <h2 className="text-2xl font-semibold leading-none line-clamp-1">{name}</h2>

        <div className="flex items-center gap-1 mt-1 text-yellow-400 text-sm">
          ★★★★★
          <span className="text-white ml-2 text-sm">4.5</span>
        </div>

        <p className="text-[13px] leading-[1.3] mt-3 opacity-90">
          Aromatic, soft, and tender chunks of lamb layered with rice infused
          with the flavors of spices.
        </p>

        <button className="mt-4 w-full bg-[#4B3A1F] py-2 rounded-full text-sm font-semibold active:scale-95 cursor-pointer">
          ORDER NOW
        </button>
      </div>
    </div>
  );
};

export default FCard;
