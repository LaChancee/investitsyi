import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function App() {
  return (
    <div>
      <div className="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-50 dark:opacity-20"></div>
      <h1 className="text-blue-600 text-3xl">Test </h1>
      <h2>
        Deuxième test
      </h2>
    </div>
  );
}
