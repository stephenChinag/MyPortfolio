import { useState, useEffect } from "react";
import { CV } from "../data/cv.js";

export default function Splash({ onDone }) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLeaving(true), 1500);
    const t2 = setTimeout(onDone, 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  return (
    <div className={`splash${leaving ? " splash--out" : ""}`} aria-live="polite">
      <div className="splash-inner">
        <div className="splash-hello">Hello there.</div>
        <div className="splash-name">
          {CV.name}<br />
          <span className="splash-surname">{CV.surname}.</span>
        </div>
        <div className="splash-role">{CV.title} · Open to relocate · Remote</div>
        <div className="splash-bar">
          <div className="splash-progress" />
        </div>
      </div>
    </div>
  );
}
