import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Seo } from "./seo.js";
import Header from "./header.js";
import Footer from "./footer.js";

export default function Layout({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
}) {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const meta = data?.site?.siteMetadata ?? {};

  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}