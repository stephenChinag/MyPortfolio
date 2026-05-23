const ITEMS = ["React.js","Next.js","TypeScript","Tailwind CSS","Redux","Zustand","Node.js","Jest","Figma","PostgreSQL","MongoDB","LiveKit"];

export default function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {[...Array(2)].map((_, pass) =>
          ITEMS.map((t, i) => (
            <div className="marquee-item" key={`${pass}-${i}`}>
              <strong>✦</strong>&nbsp; {t} &nbsp;
            </div>
          ))
        )}
      </div>
    </div>
  );
}
