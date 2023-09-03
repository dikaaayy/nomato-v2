import Header from "../components/Head/Header";
import Navbar from "../components/Navbar/Navbar";
import Search from "../components/Search/SearchComponent";
import { GetServerSideProps } from "next";
import { authOptions } from "./api/auth/[...nextauth]";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  // const session = await unstable_getServerSession(req, res, authOptions);

  return { props: {} };
};

export default function search({}: any) {
  return (
    <>
      <Header title={"Search"} />
      <Search />
      <Navbar />
    </>
  );
}
