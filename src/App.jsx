import { useCallback, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

// Use /public assets so Vite won't crash if imports can't be resolved
const driveLogo = "/drive-logo.png";
const driveRoad = "/drive-road.jpg";
const driveCamera = "/drive-camera.jpg";
const lazadaIcon = "/lazada.png";
const shopeeIcon = "/shopee.png";

export default function App() {
  const [active, setActive] = useState("home");

  const scrollToId = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  }, []);

  return (
    <div className="page">
      <Navbar active={active} onNav={scrollToId} />

      {/* HOME (Hero) */}
      <section id="home" className="section hero">
        <div className="container heroGrid">
          <div className="heroLeft">
            <h2 className="heroTitle">
              Drowsiness Recognition <br />
              through Intelligent <br />
              Vision Evaluation System
            </h2>

            <p className="heroBody">
              An IoT-based that integrates real-time monitoring technologies such
              as camera based eyelid tracking, rapid blinking analysis,
              <br />
              and eyelid-closure detection to ensure continuous assessment of
              driver alertness and enhance road safety through timely awareness
              and automated response mechanisms with an application path.
            </p>

            <div className="heroButtons">
              <button className="btn btnPrimary" onClick={() => scrollToId("contact")}>
                BUY NOW
              </button>
              <button className="btn btnOutline" onClick={() => scrollToId("services")}>
                LEARN MORE
              </button>
            </div>
          </div>

          <div className="heroRight">
            <div className="logoCard">
              <img className="logoCardImg" src={driveLogo} alt="D.R.I.V.E. Logo" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES (image overlay section) */}
      <section id="services" className="section services">
        <div className="container">
          <div className="videoCard" role="img" aria-label="Night driving background">
            <img className="videoBg" src={driveRoad} alt="Driving at night" />
            <div className="videoOverlay" />
            <div className="videoText">
              <div className="videoBrand">D.R.I.V.E.</div>
              <div className="videoDesc">
                D.R.I.V.E. combines real-time vigilance, intelligent alerts,
                and seamless mobile connectivity to enhance road safety and
                prevent fatigue-related incidents.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT (dark strip with camera image + paragraph) */}
      <section id="about" className="section about">
        <div className="container aboutRow">
          <div className="aboutImageWrap">
            <img className="aboutImage" src={driveCamera} alt="Camera device" />
          </div>

          <p className="aboutText">
            D.R.I.V.E. is used to continuously monitor driver alertness,
            provide immediate in-car warnings, and log events for safety oversight
            and combining IoT Hardware, AI analysis, and mobile integration.
          </p>
        </div>
      </section>

      {/* CONTACT (purchase + hardware links) */}
      <section id="contact" className="section contact">
        <div className="container contactGrid">
          <div className="buyCol">
            <div className="buyText">
              <div className="buyLine">
                Ready to buy? Purchase this device <br />
                easily through our secure link.
              </div>
            </div>

            <div className="logoCard contactLogoCard">
              <img className="logoCardImg" src={driveLogo} alt="D.R.I.V.E. Logo" />
            </div>
          </div>

          <div className="linksCol">
            <div className="hardwareTitle">Hardware link:</div>

            <div className="shopRow">
              <img className="shopIcon" src={lazadaIcon} alt="Lazada" />
              <a
                className="shopLink"
                href="https://www.lazada.com.ph/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.lazada.com.ph/
              </a>
            </div>

            <div className="shopRow">
              <img className="shopIcon" src={shopeeIcon} alt="Shopee" />
              <a
                className="shopLink"
                href="https://shopee.ph/"
                target="_blank"
                rel="noreferrer"
              >
                https://shopee.ph/
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
