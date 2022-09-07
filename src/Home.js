import React from "react";
import Header from "./components/Header";
import BrandNav from "./components/BrandNav";
import NewStorePOST from "./components/NewStorePOST";


function Home() {
  return (
    <div>
      <Header />
      <BrandNav />
        {/* <Login /> */}
      <NewStorePOST />

    </div>
  );
}

export default Home;
