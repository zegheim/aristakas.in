import Layout from "../src/components/layout";

const AboutPage = () => (
  <Layout pageName="About Me">
    <section className="text-primary text-justify leading-snug px-4">
      <p>Hey there! 👋</p>
      <p>
        I am a Graduate Software Engineer at JP Morgan, as part of their{" "}
        <a href="https://careers.jpmorgan.com/global/en/students/programs/software-engineer-fulltime">
          Software Engineer Program (SEP)
        </a>
        . Before that, I studied Mathematics and Statistics as an undergraduate
        at The University of Edinburgh, and graduated on July 2020. As of
        September 2020, I have spent 5 years living in the UK!
      </p>
      <p>
        I am a{" "}
        <a href="https://www.gnu.org/philosophy/free-sw.html">
          free and open-source software (FOSS)
        </a>{" "}
        enthusiast, and one of my short-term goals is to be a FOSS contributor.
        I use <a href="https://pop.system76.com/">Pop!_OS 20.04 LTS</a> running
        the <a href="https://www.gnome.org/">GNOME desktop environment</a> as my
        daily driver for personal development work. My preferred text editor is{" "}
        <a href="https://github.com/VSCodium/vscodium">VSCodium</a>, a modified
        version of VSCode without the branding, intrusive telemetry, and
        licensing requirements.
      </p>
      <p>
        In the context of our increasingly digitalised world, digital privacy is
        an issue that I feel strongly about and is one of the main reasons
        behind my interest in FOSS. I am taking steps to minimise my digital
        footprint, such as by using Firefox configured with{" "}
        <a href="https://github.com/arkenfox/user.js">
          <code>user.js</code>
        </a>{" "}
        and <a href="https://ublockorigin.com/">uBlock Origin</a>. There are
        still{" "}
        <a href="https://spyware.neocities.org/articles/index.html">
          many aspects
        </a>{" "}
        where I fall short, but I hope to remedy them gradually.
      </p>
      <p>
        As part of my commitment towards digital privacy, this website does not
        employ any tracking measures, and does not serve any cookies. This will
        be good news to everyone, unless you&#39;re{" "}
        <a href="https://muppet.fandom.com/wiki/Cookie_Monster">this guy</a>.
        The only way for me to find out that you have visited this page is for
        you to tell me directly.
      </p>
      <p>
        I am always more than happy to talk about digital privacy and practical
        steps you can take to minimise your footprint. Drop me an e-mail over at{" "}
        <a href="mailto:hello@aristakas.in">hello@aristakas.in</a> if you want
        to do just that or even to say &#34;I visited your page!&#34; -
        that&#39;s fine and much appreciated too 😄
      </p>
    </section>
  </Layout>
);

export default AboutPage;
