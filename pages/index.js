import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Massage from "../comps/Message";
import Footer from "../comps/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>ClickShield | Home</title>
        <meta name="keywords" content="clickshield" />
      </Head>
      <div>
        <Massage />
      </div>
    </>
  );
}
