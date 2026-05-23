export default function DarkToggle({ dark, setDark }) {
  return (
    <button
      className="dm-toggle"
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle dark mode"
    >
      <div className="dm-track">
        <div className={`dm-thumb${dark ? " on" : ""}`}>
          {dark ? "☾" : "☀"}
        </div>
      </div>
    </button>
  );
}
