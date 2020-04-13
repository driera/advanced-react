import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charset="utf-8" />
      <link
        rel="shortcut icon"
        href="/static/favicon.ico"
        type="image/x-icon"
      />
      <link rel="stylesheet" href="/static/nprogress.css" />
      <title>.node Sick Fits!</title>
    </Head>
  );
};

export default Meta;
