import React from "react";

const ShowLeftCard = () => {
  return (
    <div className="bg-[#F4E9CB] w-full lg:w-[30%] rounded-lg">
      <div className="flex items-center justify-between gap-5 p-5">
        <div>
          <h2 className="font-semibold text-[#BA5800] text-xl">Litti-chokha</h2>
          <p>@category</p>
          <p>#country</p>
        </div>
        <div className="w-70 h-30 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover object-center"
            src="https://urjabites.com/wp-content/uploads/2023/09/image-48.png"
            alt=""
          />
        </div>
      </div>
      <hr className="h-2 bg-white w-full"/>
      <div className="p-5 flex flex-col gap-3 ">
        <div className="flex items-center justify-between hover:bg-[#BA5800] hover:text-white p-3 rounded">
          <h3 className="font-semibold">Dal-khichdi</h3>
          <div className="w-10 h-10">
          <img className="w-full h-full object-contain" src="https://www.bbassets.com/media/uploads/p/xl/40209807_1-the-taste-company-dal-khichdi-ready-to-eat-instant-food.jpg" alt="" />
          </div>
        </div>
        <div className="flex items-center justify-between hover:bg-[#BA5800] hover:text-white p-3 rounded">
          <h3 className="font-semibold">Dal-khichdi</h3>
          <div className="w-10 h-10">
          <img className="w-full h-full object-contain" src="https://www.bbassets.com/media/uploads/p/xl/40209807_1-the-taste-company-dal-khichdi-ready-to-eat-instant-food.jpg" alt="" />
          </div>
        </div>
        <div className="flex items-center justify-between hover:bg-[#BA5800] hover:text-white p-3 rounded">
          <h3 className="font-semibold">Dal-khichdi</h3>
          <div className="w-10 h-10">
          <img className="w-full h-full object-contain" src="https://www.bbassets.com/media/uploads/p/xl/40209807_1-the-taste-company-dal-khichdi-ready-to-eat-instant-food.jpg" alt="" />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ShowLeftCard;
