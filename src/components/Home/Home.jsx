import React from "react";
import HomeBanner from "../Banners/HomeBanner";
import FamousCategory from "../Category/FamousCategory";
import Suggestion from "../products/Suggestion";

function Home() {
    return (
      <main>
        <FamousCategory/>
        <HomeBanner/>
        <Suggestion
        />
      </main>
    )
}
export default Home;