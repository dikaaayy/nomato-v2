import { GetServerSideProps } from "next";
import { createContext, useRef, useState } from "react";
import Header from "../../components/Head/Header";
import Navbar from "../../components/Navbar/Navbar";
import DetailedInformation from "../../components/RestaurantDetail/DetailedInformation";
import MenuSection from "../../components/RestaurantDetail/MenuSection";
import RatingSection from "../../components/RestaurantDetail/Rating/RatingSection";
import RestaurantFeature from "../../components/RestaurantDetail/RestaurantFeature";
import RestaurantHeader from "../../components/RestaurantDetail/RestaurantHeader";
import TopButtons from "../../components/RestaurantDetail/TopButtons";
import { prisma } from "../../lib/prisma";

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { routeName } = context.params;
  const restoran = await prisma.restaurant.findUnique({
    where: {
      routeName,
    },
    include: {
      rating: {
        include: {
          user: true,
        },
      },
      category: {
        select: {
          categoryName: true,
        },
      },
      information: true,
      featureImage: {
        select: {
          URL: true,
        },
      },
    },
  });
  if (!restoran) {
    return {
      notFound: true,
    };
  }
  return { props: { restaurant: JSON.parse(JSON.stringify(restoran)) } };
};

export const ReviewContext = createContext(null as any);

export default function Restaurant({ restaurant }: any) {
  const { name, information, rating } = restaurant;
  const [reviews, setReviews] = useState<any[]>(rating);
  const ratingDivRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Header title={name} />
      <div className="mx-5 text-darkGray">
        <TopButtons />
        <RestaurantHeader restaurant={restaurant} />
        <div className="flex justify-between">
          <button
            className="text-white border-darkRed border-2 bg-darkRed px-12 py-3 rounded"
            onClick={() => {
              ratingDivRef?.current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "start",
              });
            }}
          >
            REVIEWS
          </button>
          <button className="text-darkGray border-darkRed border-2 px-12 py-3 rounded">Photos</button>
        </div>
      </div>
      <hr className="border-4 my-4" />
      <DetailedInformation restaurant={restaurant} />
      <hr className="border-4 my-4" />
      <MenuSection restaurant={restaurant} />
      {information && (
        <>
          <hr className="border-4 my-4" />
          <RestaurantFeature information={information} />
        </>
      )}
      <hr className="border-4 my-4" />
      <ReviewContext.Provider value={{ reviews, setReviews }}>
        <RatingSection divRef={ratingDivRef} restaurant={restaurant} />
      </ReviewContext.Provider>
      <Navbar />
    </>
  );
}
