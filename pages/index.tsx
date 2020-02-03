import React from "react";
import Head from "next/head";
import RegistrationForm from "../components/RegistrationForm";

const Home = () => (
  <div>
    <Head>
      <title>Registration Form using Formik 2</title>
    </Head>
      <header>
    Registration Form
      </header>
      <main>
          <RegistrationForm/>
      </main>
  </div>
);

export default Home;
