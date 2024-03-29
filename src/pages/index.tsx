import { Inter, Roboto } from "next/font/google";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Dashboard from "./dashboard/Dashboard";
import Footer from "@/components/Footer";
import type { IProduct } from "@/types/index";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({ weight: "700", subsets: ["latin"] });

interface IDataProps {
  data: IProduct[];
}

export default function Home({ data }: IDataProps) {
  return (
    <>
      <Header />
      <Navbar />
      <Dashboard products={data} />

      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products?limit=15");

  const data = await res.json();

  return { props: { data } };
}
