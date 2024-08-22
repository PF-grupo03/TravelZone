// components/Card/Card.tsx
"use client";

import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card = ({ title, description, imageUrl }: CardProps) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5">
      <a href="#">
        <div className="relative h-52">
          <Image
            className="rounded-t-lg object-cover"
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   33vw"
          />
        </div>
      </a>
      <div className="p-3 flex flex-col justify-between h-50">
        <div>
          <a href="#">
            <h3 className="mt-2 text-base font-semibold text-gray-900 dark:text-white mb-3">
              {title}{" "}
            </h3>
            <h5 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
              {description}
            </h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
