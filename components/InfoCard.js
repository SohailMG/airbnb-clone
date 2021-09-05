import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { useState } from "react";
function InfoCard({ img, location, description, star, price, total, title }) {
  const [heartFill, setHeartFill] = useState("none");
  return (
    <div className="card-container hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-40  w-80 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          alt={location}
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between pt-4">
          <p>{location}</p>
          <HeartIcon
            className="h-7 cursor-pointer "
            fill={heartFill}
            onDoubleClick={() => {
              setHeartFill("black");
            }}
            onClick={() => {
              setHeartFill("none");
            }}
          />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="text-sm pt-2 text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-centre">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="text-lg font-semibold  pb-2 lg:text-2xl">{price}</p>
            <p className="text-right font-extralight ">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
