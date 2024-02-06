import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>ClickShield | About</title>
        <meta name="keywords" content="clickshield" />
      </Head>
      <div>
        <h1>About</h1>
        <h2>About the product</h2>
        <p>
          <br />
          Our innovative product offers a seamless solution for verifying
          messages, by checking the validity of URLs embedded within messages
          and their grammer. By connecting to several APIs, our product
          efficiently scans incoming messages, extracting URLs and subjecting
          them and the text to rigorous validation checks.
          <br />
          This streamlined process ensures that users can confidently navigate
          through digital content without the risk of encountering malicious or
          broken links.
          <br />
          With our product, businesses and individuals alike can enjoy
          heightened security and reliability in their online interactions,
          safeguarding against potential threats and enhancing overall browsing
          experiences.
        </p>
        <h2>About the ClickShield team</h2>
        <p>
          <br />
          Our team comprises five accomplished women in their twenties, each
          contributing their expertise to our collective vision.
          <br />
          Allel Bohbot recently completed her computer science degree at
          Ben-Gurion University (BGU) and resides in Beer Sheva.
          <br />
          Nitzan Adam, another BGU graduate, also calls Beer Sheva home.
          <br />
          Shirly Blatt, currently in her final semester of the BGU computer
          science program, resides in Beer Sheva with her adorable pup, Ray.
          <br />
          Sharon Tshuva, another BGU alumna, lives in Tel Aviv alongside her
          loyal companion, Boni.
          <br />
          Lastly, Shir Levy holds a degree in computer and cognitive science
          from The Hebrew University of Jerusalem (HUJI) and resides in
          Jerusalem.
          <br />
          Together, we are a dedicated team, driven by our passion for
          technology and innovation
        </p>
      </div>
    </>
  );
};

export default About;
