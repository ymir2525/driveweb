import { useCallback, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

// Use /public assets so Vite won't crash if imports can't be resolved
const driveLogo = "/drive-logo.png";
const driveRoad = "/drive-bg.jfif";
const driveCamera = "/drive-camera.jfif";
const lazadaIcon = "/lazada.png";
const shopeeIcon = "/shopee.png";
const placeholder = "/placeholder.svg";

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
        <div className="container">
          <div className="heroGrid">
            <div className="heroLeft">
              <div className="panel">
              <h2 className="heroTitle">
              Drowsiness Recognition <br />
              through Intelligent <br />
              Vision Evaluation System
              </h2>

              <p className="heroBody">
                An IoT-based system that integrates real-time monitoring
                technologies to detect signs of drowsiness and provide timely
                alerts, reducing the risk of fatigue-related incidents.
              </p>

              <div className="heroButtons">
                <button className="btn btnPrimary" onClick={() => scrollToId("contact")}>Get Started</button>
              </div>
            </div>
          </div>
          <div className="heroRight">
            <div className="logoCard logoCardLarge">
              <img
                className="logoCardImg"
                src={driveLogo}
                alt="D.R.I.V.E. Logo"
                onError={(e) => (e.currentTarget.src = placeholder)}
              />
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES (image overlay section) */}
      <section id="services" className="section services">
        <div className="container">
          <div className="videoCard" role="img" aria-label="Night driving background">
            <img
              className="videoBg"
              src={driveRoad}
              alt="Driving at night"
              onError={(e) => (e.currentTarget.src = placeholder)}
            />
            <div className="videoOverlay" />
            <div className="videoText">
              <div className="videoBrand">D.R.I.V.E.</div>
              <div className="videoDesc">
                An IoT-based system that integrates real-time monitoring
                technologies such as camera-based eyelid tracking, rapid
                blinking analysis, and eyelid-closure detection to ensure
                continuous assessment of driver alertness.
              </div>
              <div className="videoCta">
                <button className="btn btnPrimary" onClick={() => scrollToId("how")}>How It Works?</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="section how">
        <div className="container">
          <div className="howRow">
            <div className="howImageWrap">
              <img
                className="howImage"
                src={driveCamera}
                alt="Camera device"
                onError={(e) => (e.currentTarget.src = placeholder)}
              />
            </div>

            <div>
              <h3 className="howTitle">How It Works?</h3>
              <div className="howList">
                <div className="howItem">
                  <div className="howIcon">
                    <img className="howIconImg" src={placeholder} alt="Eye Monitoring icon" onError={(e) => (e.currentTarget.src = placeholder)} />
                  </div>
                  <div>
                    <div className="howItemTitle">Eye Monitoring</div>
                    <div className="howItemDesc">Detects prolonged eyelid closure, irregular blinking, pupil size changes.</div>
                  </div>
                </div>

                <div className="howItem">
                  <div className="howIcon">
                    <img className="howIconImg" src={placeholder} alt="Notifications icon" onError={(e) => (e.currentTarget.src = placeholder)} />
                  </div>
                  <div>
                    <div className="howItemTitle">Automatic Notifications</div>
                    <div className="howItemDesc">Mild, Moderate, and Severe alerts triggered based on sensor data.</div>
                  </div>
                </div>

                <div className="howItem">
                  <div className="howIcon">
                    <img className="howIconImg" src={placeholder} alt="Steering icon" onError={(e) => (e.currentTarget.src = placeholder)} />
                  </div>
                  <div>
                    <div className="howItemTitle">Steering Behavior</div>
                    <div className="howItemDesc">Monitors hand presence and micro-corrections to ensure engagement.</div>
                  </div>
                </div>

                <div className="howItem">
                  <div className="howIcon">
                    <img className="howIconImg" src={placeholder} alt="Drive history icon" onError={(e) => (e.currentTarget.src = placeholder)} />
                  </div>
                  <div>
                    <div className="howItemTitle">Drive History</div>
                    <div className="howItemDesc">Records timestamped alerts, driver responses, and sensor data for review.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES + APP + CONTACT combined */}
      <section id="features" className="section features">
        <div className="container">
          <h3 className="sectionTitle">Mobile App Features</h3>
          <div className="featureGrid">
            <div className="featureImages">
              <img className="featurePhone phoneMockup" src={placeholder} alt="Smart Detection" onError={(e) => (e.currentTarget.src = placeholder)} />
              <img className="featurePhone phoneMockup" src={placeholder} alt="Location Tracking" onError={(e) => (e.currentTarget.src = placeholder)} />
              <img className="featurePhone phoneMockup" src={placeholder} alt="Contact Dashboard" onError={(e) => (e.currentTarget.src = placeholder)} />
              <img className="featurePhone phoneMockup" src={placeholder} alt="Drowsiness History" onError={(e) => (e.currentTarget.src = placeholder)} />
            </div>
          </div>
        </div>

        <section id="app" className="section appShowcase">
          <div className="container">
            <h3 className="sectionTitle">About D.R.I.V.E App</h3>
            <div className="showcaseRow">
              <img className="phoneMockup" src={placeholder} alt="Log In" onError={(e) => (e.currentTarget.src = placeholder)} />
              <img className="phoneMockup" src={placeholder} alt="Driver Status" onError={(e) => (e.currentTarget.src = placeholder)} />
              <img className="phoneMockup" src={placeholder} alt="Profile" onError={(e) => (e.currentTarget.src = placeholder)} />
            </div>
          </div>
        </section>

        <section id="intro" className="section featureIntro">
          <div className="container">
            <div className="introRow">
              <div className="introLogoBox">
                <img className="introLogo" src={driveLogo} alt="D.R.I.V.E. Logo" />
              </div>

              <div className="introTextCol">
                <p className="introParagraph">
                  Our group focuses on developing IoT-enabled driver monitoring  products that ensure safety and vigilance on the road. D.R.I.V.E. is a new generation of intelligent drowsiness detection technology that integrates seamlessly with vehicles and mobile applications to provide real-time monitoring and management. It acts as your road safety companion, designed to reduce accidents caused by fatigue.
                </p>
              </div>

              <ol className="introList">
                <li><strong>Your vigilant co-pilot for safer journeys.</strong> D.R.I.V.E. is an intelligent, IoT-powered safety solution designed to keep drivers alert and protected by analyzing facial cues and eyelid movement in real time.</li>
                <li><strong>Instant alerts when it matters most.</strong> From subtle reminders to urgent warnings, D.R.I.V.E. responds immediately to drowsiness, helping drivers stay focused and in control.</li>
                <li><strong>Seamless mobile integration.</strong> Review past alerts, track sleep patterns, and keep emergency contacts informed all from one secure app.</li>
                <li><strong>Simple, portable, and ready to go.</strong> With its rechargeable Type-C design, D.R.I.V.E. is easy to set up and always prepared to safeguard every trip.</li>
              </ol>
            </div>
          </div>
        </section>

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
      </section>

      <Footer />
    </div>
  );
}
