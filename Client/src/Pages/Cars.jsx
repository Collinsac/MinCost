import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Cars = () => {
  // const [data, setData] = useState([
  //   {
  //     id: "1jk5415gfchvjb4",
  //     img: "https://kobemotor.es/wp-content/uploads/2024/05/Toyota-Corolla-Touring-Sports-Style-Edition.jpg",
  //     name: "TOYOTA",
  //     model:"Toyota Camry",
  //     type:"Midsize Sedan",
  //     highlight:"Sporty design with dynamic handling"
  //   },
  //   {
  //     id: "2d3f54g5sdf7sd5f5",
  //     img: "https://www.lexuspr.com/dynamic/900x383/imgLexus/vehicles/images/mlp/colorizer/2022/lx/LX-2022-083-LuxWh.jpg",
  //     name: "LEXUS",
  //     model:"Lexus RX",
  //     type:"Luxury Midsize SUV",
  //     highlight:"Bold design with a premium interior"
  //   },
  //   {
  //     id: "1jk5415gfchvjb4",
  //     img: "https://kobemotor.es/wp-content/uploads/2024/05/Toyota-Corolla-Touring-Sports-Style-Edition.jpg",
  //     name: "TOYOTA",
  //     model:"Toyota Camry",
  //     type:"Midsize Sedan",
  //     highlight:"Sporty design with dynamic handling"
  //   },
  //   {
  //     id: "2d3f54g5sdf7sd5f5",
  //     img: "https://www.lexuspr.com/dynamic/900x383/imgLexus/vehicles/images/mlp/colorizer/2022/lx/LX-2022-083-LuxWh.jpg",
  //     name: "LEXUS",
  //     model:"Lexus RX",
  //     type:"Luxury Midsize SUV",
  //     highlight:"Bold design with a premium interior"
  //   },{
  //     id: "1jk5415gfchvjb4",
  //     img: "https://kobemotor.es/wp-content/uploads/2024/05/Toyota-Corolla-Touring-Sports-Style-Edition.jpg",
  //     name: "TOYOTA",
  //     model:"Toyota Camry",
  //     type:"Midsize Sedan",
  //     highlight:"Sporty design with dynamic handling"
  //   },
  //   {
  //     id: "2d3f54g5sdf7sd5f5",
  //     img: "https://www.lexuspr.com/dynamic/900x383/imgLexus/vehicles/images/mlp/colorizer/2022/lx/LX-2022-083-LuxWh.jpg",
  //     name: "LEXUS",
  //     model:"Lexus RX",
  //     type:"Luxury Midsize SUV",
  //     highlight:"Bold design with a premium interior"
  //   },{
  //     id: "1jk5415gfchvjb4",
  //     img: "https://kobemotor.es/wp-content/uploads/2024/05/Toyota-Corolla-Touring-Sports-Style-Edition.jpg",
  //     name: "TOYOTA",
  //     model:"Toyota Camry",
  //     type:"Midsize Sedan",
  //     highlight:"Sporty design with dynamic handling"
  //   },
  //   {
  //     id: "2d3f54g5sdf7sd5f5",
  //     img: "https://www.lexuspr.com/dynamic/900x383/imgLexus/vehicles/images/mlp/colorizer/2022/lx/LX-2022-083-LuxWh.jpg",
  //     name: "LEXUS",
  //     model:"Lexus RX",
  //     type:"Luxury Midsize SUV",
  //     highlight:"Bold design with a premium interior"
  //   },{
  //     id: "1jk5415gfchvjb4",
  //     img: "https://kobemotor.es/wp-content/uploads/2024/05/Toyota-Corolla-Touring-Sports-Style-Edition.jpg",
  //     name: "TOYOTA",
  //     model:"Toyota Camry",
  //     type:"Midsize Sedan",
  //     highlight:"Sporty design with dynamic handling"
  //   },
  //   {
  //     id: "2d3f54g5sdf7sd5f5",
  //     img: "https://www.lexuspr.com/dynamic/900x383/imgLexus/vehicles/images/mlp/colorizer/2022/lx/LX-2022-083-LuxWh.jpg",
  //     name: "LEXUS",
  //     model:"Lexus RX",
  //     type:"Luxury Midsize SUV",
  //     highlight:"Bold design with a premium interior"
  //   },{
  //     id: "1jk5415gfchvjb4",
  //     img: "https://kobemotor.es/wp-content/uploads/2024/05/Toyota-Corolla-Touring-Sports-Style-Edition.jpg",
  //     name: "TOYOTA",
  //     model:"Toyota Camry",
  //     type:"Midsize Sedan",
  //     highlight:"Sporty design with dynamic handling"
  //   },
  //   {
  //     id: "2d3f54g5sdf7sd5f5",
  //     img: "https://www.lexuspr.com/dynamic/900x383/imgLexus/vehicles/images/mlp/colorizer/2022/lx/LX-2022-083-LuxWh.jpg",
  //     name: "LEXUS",
  //     model:"Lexus RX",
  //     type:"Luxury Midsize SUV",
  //     highlight:"Bold design with a premium interior"
  //   },
  // ]);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/product").then((res) => setData(res.data));
    return () => {};
  }, []);

  return (
    <div className="flex-1 pt-20 grid grid-cols-4 gap-4 overflow-scroll">
      {data.map((item) => (
        <Link
          to={`/car/${item._id}`}
          key={item.id}
          className="cursor-pointer bg-white p-10 h-fit rounded-2xl flex flex-col items-center justify-center"
        >
          <img src={item.img} className="h-[100px] object-cover" />
          <h2>{item.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default Cars;
