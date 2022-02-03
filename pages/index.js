import react from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import { GrReactjs } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { BiGitBranch } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

import {
  faBehance,
  faBootstrap,
  faCss3,
  faFacebook,
  faFigma,
  faHtml5,
  faInstagram,
  faJs,
  faJsSquare,
  faLinkedin,
  faSass,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import slider from "react-slick/lib/slider";
export default function Home() {
  const easing = [0.6, -0.05, 0.01, 0.99];
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.1,
        ease: easing,
      },
    },
  };
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const { theme, setTheme } = useTheme();

  return (
    <>
      <Head>
        <title>Ahmad Nagm</title>
        <meta name="description" content="Generated by create next app" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
        <div className={styles.s1}>
          <div className={styles.mainContainer}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.4,
                  },
                },
              }}
            >
              <h1>Hi!👋🏼 I&apos;m Ahmad Nagm</h1>
            </motion.div>
            <motion.div variants={stagger} className={styles.wrapper}>
              <div className={styles.mac}>
                <div className={styles.macWrap}>
                  <div className={styles.dotOne}></div>
                  <div className={styles.dotTwo}></div>
                  <div className={styles.dotThree}></div>
                </div>
              </div>
              <motion.div variants={fadeInUp} className={styles.leftColumn}>
                <div>
                  <div className={styles.profilePic}>
                    <Image
                      src="/neggm.png"
                      alt="person"
                      height={400}
                      width={600}
                      layout="responsive"
                    />
                  </div>
                </div>
                <h5>Themes</h5>
                <div className={styles.themeSettings}>
                  <div
                    className={styles.light}
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "light")
                    }
                  ></div>
                  <div
                    className={styles.blue}
                    onClick={() => setTheme(theme === "dark" ? "dark" : "dark")}
                  ></div>
                  <div
                    className={styles.green}
                    onClick={() =>
                      setTheme(theme === "dark" ? "green" : "green")
                    }
                  ></div>
                  <div
                    className={styles.purple}
                    onClick={() =>
                      setTheme(theme === "dark" ? "purple" : "purple")
                    }
                  ></div>
                </div>
                <p>Theme Settings will be save for your next visit</p>
              </motion.div>
              <motion.div variants={fadeInUp} className={styles.rightColumn}>
                <div>
                  <div className={styles.contentShadow}>
                    <div className={styles.content}>
                      <div className={styles.cornerOne}></div>
                      <div className={styles.cornerTwo}></div>
                      <div className={styles.cornerThree}></div>
                      <div className={styles.cornerFour}></div>
                      <h3>What I do</h3>
                      <p>
                        I am a Front-End Developer With 2 Years Of Professional
                        Experience, I love to build websites from scratch.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className={styles.s2}>
          <div className={styles.mainContainer}>
            <div className={styles.aboutWrapper}>
              <div className={styles.aboutMe}>
                <h4>ABOUT ME</h4>
                <p>I build new projects just to tickle my brain</p>
                <hr />
                <h4>TOP EXPERTICE </h4>
                <p>
                  Front-end developer with 2 years of Professional Experience |
                  <a
                    href="https://drive.google.com/file/d/1OYOxp7OGEkUzHkV31Fn0cTUByaohwJNW/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download Resume
                  </a>
                </p>
                <div className={styles.skills}>
                  <ul>
                    <li>
                      <span>
                        <FontAwesomeIcon icon={faHtml5} />
                      </span>
                      HTML5
                    </li>
                    <li>
                      <span>
                        <FontAwesomeIcon icon={faCss3} />
                      </span>
                      CSS3
                    </li>
                    <li>
                      <span>
                        <FontAwesomeIcon icon={faJs} />
                      </span>
                      JavaScript
                    </li>
                    <li>
                      <span>
                        <FontAwesomeIcon icon={faJsSquare} />
                      </span>
                      Jquery
                    </li>
                    <li>
                      <span>
                        <GrReactjs />
                      </span>
                      REACT Js
                    </li>
                    <li>
                      <span>
                        <SiNextdotjs />
                      </span>
                      NEXT Js
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <span>
                        <FontAwesomeIcon icon={faBootstrap} />
                      </span>
                      Bootstrap5
                    </li>
                    <li>
                      <span>
                        <FontAwesomeIcon icon={faSass} />
                      </span>
                      Sass
                    </li>
                    <li>
                      <span>
                        <FontAwesomeIcon icon={faPaintBrush} />
                      </span>
                      AdobeXD
                    </li>
                    <li>
                      <span>
                        <FontAwesomeIcon icon={faFigma} />
                      </span>
                      Figma
                    </li>
                    <li>
                      <span>
                        <BiGitBranch />
                      </span>
                      Git
                    </li>
                    <li>
                      <span>
                        <BsGithub />
                      </span>
                      Github
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.social}>
                <div className={styles.socialPic}>
                  <Image
                    src="/nubelson-fernandes--Xqckh_XVU4-unsplash.jpg"
                    alt="person"
                    height={400}
                    width={600}
                    layout="responsive"
                  />
                </div>
                <h3>Find Me On</h3>
                <div className={styles.socialLinks}>
                  <a
                    href="https://www.facebook.com/ahmad.magdy.129/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4>
                      <FontAwesomeIcon icon={faFacebook} />
                    </h4>
                  </a>

                  <a
                    href="https://www.instagram.com/ahmed_magdy_negm/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4>
                      <FontAwesomeIcon icon={faInstagram} />
                    </h4>
                  </a>

                  <a
                    href="https://twitter.com/DevAhmdNagm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4>
                      <FontAwesomeIcon icon={faTwitter} />
                    </h4>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ahmad-negm/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </h4>
                  </a>

                  <a
                    href="https://www.behance.net/ahmadnegm2000"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4>
                      <FontAwesomeIcon icon={faBehance} />
                    </h4>
                  </a>

                  <a
                    href="https://www.youtube.com/channel/UCGjOEhwmaJsha-cVvLVTXbA"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4>
                      <FontAwesomeIcon icon={faYoutube} />
                    </h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.s1}>
          <div className={styles.mainContainer}>
            <h1 className={styles.cardsTopic}>Some Of My Past Projects</h1>
            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.cardImg}>
                  <Image
                    src="/3.png"
                    className={styles.image}
                    height={400}
                    width={600}
                    alt="person"
                    layout="responsive"
                  />
                </div>
                <div className={styles.cardBody}>
                  <h4>Chat Website</h4>
                  <p>Awesome Simple Design for chat website....</p>
                  <Link href="/work/one" target="_blank" rel="noreferrer">
                    Read more
                  </Link>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardImg}>
                  <Image
                    src="/1a.png"
                    className={styles.image}
                    height={400}
                    width={600}
                    layout="responsive"
                    alt="me"
                  />
                </div>
                <div className={styles.cardBody}>
                  <h4>Game Website Layout</h4>
                  <p>Game website design with dark colors...</p>
                  <Link href="/work/two" target="_blank" rel="noreferrer">
                    Read more
                  </Link>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardImg}>
                  <Image
                    src="/2.png"
                    className={styles.image}
                    height={400}
                    width={600}
                    alt="person"
                    layout="responsive"
                  />
                </div>
                <div className={styles.cardBody}>
                  <h4>Landing Page</h4>
                  <p>Awesome Landing Page Design for a Company website...</p>
                  <Link href="/work/three" target="_blank" rel="noreferrer">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
