import { pizzas } from "@/app/data";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const CatergoryPage = () => {
  return (
    <div className="flex flex-wrap text-red-500">
      {pizzas.map((pizza) => (
        <Link
          className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group even:bg-fuchsia-50"
          href={`/product/${pizza.id}`}
          key={pizza.id}
        >
          {/*IMAGE CONTAINER*/}
          {pizza.img && (
            <div className="relative h-[80%]">
              <Image
                src={pizza.img}
                alt="Product Image"
                className="object-contain"
                fill
              />
            </div>
          )}

          {/*TEXT CONTAINER*/}
          <div className="flex items-center justify-between gap-4 font-bold">
            <h1 className=" text-2xl uppercase p-2">{pizza.title}</h1>
            <h2 className="group-hover:hidden">${pizza.price}</h2>

            <button className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md">
              Add To Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CatergoryPage;

// {pizzas.map((item) => (
//   <Link href={`/product/${item.id}`} key={item.id} className="">
//     {/*IMAGE CONTAINER*/}
//     {item.img && (
//       <div className="relative">
//         <Image src={item.img} alt={`${item.title} Image`} fill />
//       </div>
//     )}

//     {/*TEXT CONTAINER*/}
//   </Link>
// ))}
