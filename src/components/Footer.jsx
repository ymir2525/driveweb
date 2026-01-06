import { FaGithub, FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div className="socialCol">
          <a className="socialIcon" href="#" aria-label="Figma (placeholder)">∞</a>
          <a className="socialIcon" href="#" aria-label="Twitter/X"><FaTwitter /></a>
          <a className="socialIcon" href="#" aria-label="Instagram"><FaInstagram /></a>
          <a className="socialIcon" href="#" aria-label="YouTube"><FaYoutube /></a>
          <a className="socialIcon" href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a className="socialIcon" href="#" aria-label="GitHub"><FaGithub /></a>
        </div>

        <div className="footerCols">
          <div className="footerCol">
            <div className="footerTitle">Use cases</div>
            <ul className="footerList">
              <li>UI design</li>
              <li>UX design</li>
              <li>Wireframing</li>
              <li>Diagramming</li>
              <li>Brainstorming</li>
              <li>Online whiteboard</li>
              <li>Team collaboration</li>
            </ul>
          </div>

          <div className="footerCol">
            <div className="footerTitle">Resources</div>
            <ul className="footerList">
              <li>Blog</li>
              <li>Best practices</li>
              <li>Colors</li>
              <li>Color wheel</li>
              <li>Support</li>
              <li>Developers</li>
              <li>Resource library</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
