import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`von bischopink`, `Stockholm`, `design`, `branding`]}
        title="Creative Director"
      />

      <header className="text-center">
        <h1 className="text-mobile md:text-tablet lg:text-desktop w-full xl:w-1/2 mx-auto">
          Billions of sites. Trillions of cat videos.
          And here we are.
        </h1>
        <h1 className="text-mobile md:text-tablet lg:text-desktop w-full xl:w-1/2 mx-auto mt-4 md:mt-8 lg:mt-10">
        <em>
            &nbsp;<span className="z-10 relative">Lucky us.</span>&nbsp;
          </em>
        </h1>
      </header>
      <footer className="text-center">
        <p className="text-base w-full">
          <a className="italic" href="mailto:sebastian@vonbischopink.com">
            Sebastian von Bischopink
          </a>
          <br />
          Creative Director
          <br />
          Stockholm, Sweden
        </p>
      </footer>
    </Layout>
  );
}

export default IndexPage;
