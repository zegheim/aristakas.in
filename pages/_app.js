import "../src/styles/index.css";

const MyApp = ({ Component, pageProps }) => {
  console.log("Aren't you a curious one!");
  console.log("You can find the source code to this site here:");
  console.log("https://github.com/zegheim/aristakas.in");
  return <Component {...pageProps} />;
};
export default MyApp;
