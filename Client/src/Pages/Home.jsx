import { Cable, Car, MoveRight } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <Link to={props.url} className="cursor-pointer hover:scale-105 transition-all5 flex flex-col justify-between h-[150px] p-5 rounded-xl flex-1 bg-[#ffffff5e]">
      {props.Icon}
      <div className="flex justify-between items-center">
        <p className="font-medium text-2xl">{props.name}</p>
        <MoveRight absoluteStrokeWidth size={15} />
      </div>
    </Link>
  );
};

const Home = () => {
  const [data, setData] = useState([
    {
      id: "1",
      name: "Cars",
      Icon: <Car size={40} absoluteStrokeWidth />,
      url:"/car"
    },
    {
      id: "2",
      name: "Electronics",
      Icon: <Cable size={40} absoluteStrokeWidth />,
      url:"/"
    },
  ]);
  return (
    <div className="p-5 flex-1 text-white">
      <p>Home</p>

      <div className="flex gap-x-4">
        {data.map((card) => (
          <Card {...card} key={card.id} />
        ))}

        <div className="flex-1"></div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default Home;
