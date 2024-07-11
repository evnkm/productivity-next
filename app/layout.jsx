import "@styles/globals.css";

import Head from "next/head";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Trace",
  description: "Personalized Productivity",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
