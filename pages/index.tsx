import type { NextPage } from "next";
import Head from "next/head";

import { Post } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - Reddit Clone</title>
        <meta name="description" content="Home page" />
      </Head>
      <div className="custom_grid gap-10">
        <aside className="hidden md:flex bg-emerald-400">Left sidebar</aside>
        <main className="col-span-3 flex flex-col w-[80%] mx-auto md:w-full">
          <Post
            id="1"
            username="whoyoux"
            imageUrl="https://via.placeholder.com/600/56a8c2"
          />
          <Post
            id="2"
            username="whoyoux"
            imageUrl="https://via.placeholder.com/600/56a8c2"
          />

          <Post
            id="3"
            username="whoyoux"
            imageUrl="https://via.placeholder.com/600/56a8c2"
          />
        </main>
        <aside className="hidden md:flex bg-emerald-400">Right sidebar</aside>
      </div>
    </>
  );
};

export default Home;
