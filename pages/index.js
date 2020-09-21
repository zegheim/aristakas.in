import Layout from "../src/components/layout";
import Navbar from "../src/components/navbar";
import SocialIcons from "../src/components/social-icons";

const IndexPage = () => {
  console.log("I see what you did there 👀");
  console.log("You can view the source code here to my website here:");
  console.log("https://github.com/zegheim/aristakas.in");
  console.log("Happy hacking! 😁");
  return (
    <Layout home pageName="Home">
      <section className="text-primary text-center px-4">
        <div className="inline-block">
          <h1 className="text-2xl font-mono leading-none mb-4 overflow-hidden border-r-2 border-primary whitespace-no-wrap mx-auto animate-typing">
            Hello, I&#39;m <span className="font-black">Justin</span>.
          </h1>
        </div>
        <p>
          I am currently a Software Engineer at J.P. Morgan, based in London.
        </p>
        <p>Views expressed are my own.</p>
      </section>
      <section className="text-primary mt-16 flex flex-col items-center space-y-2">
        <Navbar home />
        <SocialIcons />
        {/* <TechStack /> */}
      </section>
    </Layout>
  );
};

export default IndexPage;
