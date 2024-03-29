import Head from "next/head";
import Image from "next/image";
import { Inter, Roboto } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Dashboard from "./dashboard/Dashboard";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({ weight: "700", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Dashboard />
      <Footer />
    </>
  );
}
