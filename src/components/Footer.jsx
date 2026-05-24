import { CV } from "../data/cv.js";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)" }}>
      <div className="footer-creds reveal">
        <div className="footer-creds-label">Education &amp; Credentials</div>
        <div className="footer-creds-list">
          <div className="footer-cred-item">
            <span className="footer-cred-tag footer-cred-tag--edu">Education</span>
            BSc Computer Science · Federal University Birnin Kebbi
          </div>
          {CV.certs.map((c) => (
            <div className="footer-cred-item" key={c}>
              <span className="footer-cred-tag footer-cred-tag--cert">Certificate</span>
              {c}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bar reveal">
        <div className="footer-l">Chinagorom Owoamanam, Senior Frontend Engineer</div>
        <div className="footer-r">Open to relocate · Remote · © 2026</div>
      </div>
    </footer>
  );
}
