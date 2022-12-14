import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { data: session } = useSession();

  useEffect(() => {
    console.log("session", session);
  }, [session]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>
        {!session ? (
          <button
            onClick={() => signIn("auth0")}
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "10px 20px",
              borderRadius: "10px",
              borderWidth: 0,
            }}
          >
            Auth0 signIn
          </button>
        ) : (
          <button
            onClick={() => signOut()}
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "10px 20px",
              borderRadius: "10px",
              borderWidth: 0,
            }}
          >
            Auth0 signOut
          </button>
        )}
      </main>
    </div>
  );
};

export default Home;
