import Head from "next/head";
import { Header } from "./";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Head>
        <title>Reddit Clone</title>
        <meta
          name="description"
          content="Reddit Clone created with NextJS, Firebase, TypeScript and Storybook"
        />
      </Head>
      <div>
        <Header />
        {children}
        <footer className="text-center bg-indigo-500">Footer</footer>
      </div>
    </>
  );
};

export default Layout;
