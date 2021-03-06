import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import { Heading } from "@chakra-ui/react";

import { Box, useColorModeValue, ColorModeScript } from "@chakra-ui/react";

import theme from "../theme";

export default function Page() {
  return (
    <div className="">
      <Head>
        <title>Yo!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-20">
        <Heading as="h1" size="2xl" mb="2" className="flex justify-center">
          Czeeeść!
        </Heading>

        <div className="w-full h-[200px] my-20 mx-auto bg-green-100 grid justify-items-center items-center">dsad</div>

        <div className=""></div>
      </main>
    </div>
  );
}

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
