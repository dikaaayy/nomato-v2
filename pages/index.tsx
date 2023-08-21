import { FormEvent, useEffect, useState } from "react";
import Header from "../components/Head/Header";
import Navbar from "../components/Navbar/Navbar";
import RestaurantRow from "../components/MainPage/RestaurantRow";
import SearchBar from "../components/SearchBar";
import Topbar from "../components/Topbar";
import { prisma } from "../lib/prisma";
import { GetServerSideProps } from "next";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import Image from "next/image";
import MainPageSearch from "../components/Search/MainPageSearch";
import { getMultipleRandom } from "../lib/logic";
import { Restaurant } from "@prisma/client";
import { auth, firestore } from "../lib/firebase";
import useInsert from "../lib/useInsert";
import Jumbotron from "../components/MainPage/Jumbotron";
import CategoryList from "../components/MainPage/CategoryList";
import { useAuth } from "../components/auth/useAuth";
import { onAuthStateChanged } from "firebase/auth";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  let user: any = null;
  console.log(req.cookies);
  onAuthStateChanged(auth, (currentUser) => {
    user = currentUser;
  });
  const restoRef = firestore.collection("resto1");
  const totalDocs = await restoRef.get().then((snapshot) => snapshot.size);

  const randomIndex = Math.floor(Math.random() * totalDocs);

  const resto = await restoRef.orderBy("__name__").startAt(randomIndex.toString()).limit(10).get();
  const restoData = resto.docs.map((doc) => doc.data());

  const categoryRef = firestore.collection("category");
  const categories = await categoryRef.get();
  const categoryLists = categories.docs.map((doc: any) => doc.data());

  return { props: { restaurant: JSON.parse(JSON.stringify(restoData)), category: categoryLists, user } };
};

export default function Home({ restaurant, category, user }: any) {
  const [search, setSearch] = useState<string>("");
  const [searchData, setSearchData] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // console.log(restoran[0]);
  // console.log(restoData[0]);
  // const users = useInsert();
  const userHook = useAuth();
  // console.log(userHook);
  // console.log(user);
  // console.log(auth.currentUser);
  useEffect(() => {
    if (search === "") {
      setSearchData([]);
      return;
    }
    const getData = setTimeout(async () => {
      setIsLoading(true);
      const data = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL!}/api/getSearch?q=${search}`)).json();
      setSearchData(getMultipleRandom(data, 3));
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(getData);
  }, [search]);

  return (
    <>
      <Header title="Home" />
      <div className="pb-20 overflow-hidden mx-auto bg-white max-w-[420px]">
        <Jumbotron />
        <CategoryList category={category} />
        {search.length !== 0 && <MainPageSearch data={searchData} isLoading={isLoading} />}
        <RestaurantRow restaurants={restaurant} title={"Popular restaurants around you"} />
        <RestaurantRow search="Japanese" title={"Oriental taste"} />
        <RestaurantRow search="Noodles" title={"For noodle fan"} />
        {/* <RestaurantRow user={user} search="Japanese" title={"Japanese"} />
        <RestaurantRow user={user} search="Italian" title={"Italian"} /> */}
      </div>
      {/* <p>{JSON.stringify(restoran[0])}</p> */}
      <Navbar />
    </>
  );
}
