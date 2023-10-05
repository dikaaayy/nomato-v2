import React from "react";
import CategoryCard from "../CategoryPage/CategoryCard";
import { RestaurantV2 } from "@prisma/client";

export default function MainPageSearch({ data, isLoading }: { data: RestaurantV2[]; isLoading: boolean }) {
  if (!isLoading) {
    return (
      <div className="border-[1px] p-3 absolute inset-0 mx-auto w-[90%] max-w-[340px] md:w-[340px] lg:w-[340px] bg-white rounded-md z-[100] top-[236px] overflow-y-scroll">
        <div className="flex flex-col gap-y-3">
          {data.map((restaurant: any, i: any, row: any) => {
            if (i + 1 === row.length) {
              return <CategoryCard i={i} key={i} restaurant={restaurant} isLast={true} />;
            } else {
              return <CategoryCard i={i} key={i} restaurant={restaurant} isLast={false} />;
            }
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="border-[1px] p-3 absolute mx-auto right-0 w-[90%] bg-white rounded-md left-0 z-[100] top-[105px]">
        <p className="text-center">sedang mencari...</p>
      </div>
    );
  }
}
