import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, name, type, keywords, image }) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      <meta
        property="og:url"
        content="https://cmprieto.github.io/react-youtube/"
      />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="cmprieto.github.io/react-youtube/"/>
      <meta
        property="twitter:url"
        content="https://cmprieto.github.io/react-youtube/"
      />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* End Twitter tags */}
    </Helmet>
  );
};

export default SEO;
