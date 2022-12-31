import React from "react";
import Head from "next/head";
import Login from "../../Components/Login/Login";
import Layout from "../../Components/LayoutWrapper/Layout";
import HeaderBanner from "../../Components/HeaderBanner/HeaderBanner";

export default function login() {
  return (
    <div>
      <Head>
        <title>Canada Freelancer</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Layout>
        <HeaderBanner />
        <Login />
      </Layout>
    </div>
  );
}