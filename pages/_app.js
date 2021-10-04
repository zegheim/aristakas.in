import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../src/styles/index.css";

// For more info, see:
// https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react#nextjs
config.autoAddCss = false;

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;
export default MyApp;
