export default function BotanicalPanel({ mirrored = false }) {
  const petals = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <svg
      className="bg-art-panel"
      style={mirrored ? { transform: "scaleX(-1)" } : undefined}
      viewBox="0 0 200 900"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M28 900 C25 780 36 650 28 520 C20 390 32 285 26 180" fill="none" stroke="currentColor" strokeWidth="1.3"/>
      <ellipse cx="25" cy="163" rx="5" ry="19" fill="currentColor" transform="rotate(8 25 163)"/>
      <path d="M21 178 L12 163 M25 172 L16 159 M27 165 L35 152 M25 172 L33 159" fill="none" stroke="currentColor" strokeWidth="0.85"/>
      <path d="M28 680 C15 662 5 640 -1 614" fill="none" stroke="currentColor" strokeWidth="1"/>
      <path d="M28 520 C15 502 5 480 -1 454" fill="none" stroke="currentColor" strokeWidth="1"/>
      <path d="M72 900 C68 800 80 680 72 558 C64 448 76 356 70 264" fill="none" stroke="currentColor" strokeWidth="1.2"/>
      <ellipse cx="69" cy="247" rx="4.5" ry="18" fill="currentColor" transform="rotate(-6 69 247)"/>
      <path d="M65 262 L55 248 M69 257 L59 244 M71 250 L79 237 M69 257 L77 243" fill="none" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M72 700 C86 682 96 660 102 632" fill="none" stroke="currentColor" strokeWidth="1"/>
      <path d="M115 900 C111 812 124 714 115 612 C106 524 120 450 112 368" fill="none" stroke="currentColor" strokeWidth="1.1"/>
      <ellipse cx="111" cy="351" rx="4" ry="16" fill="currentColor" transform="rotate(10 111 351)"/>
      <path d="M107 367 L98 352 M111 362 L102 349 M113 355 L121 342" fill="none" stroke="currentColor" strokeWidth="0.75"/>
      <path d="M115 800 C128 786 136 768 140 748" fill="none" stroke="currentColor" strokeWidth="1"/>
      <path d="M157 900 C153 840 166 762 157 672 C148 598 160 538 153 458" fill="none" stroke="currentColor" strokeWidth="1.1"/>
      <ellipse cx="152" cy="441" rx="4" ry="15" fill="currentColor" transform="rotate(-8 152 441)"/>
      <path d="M148 457 L139 443 M152 452 L143 438 M154 445 L162 432" fill="none" stroke="currentColor" strokeWidth="0.75"/>
      <path d="M157 780 C170 764 180 742 185 718" fill="none" stroke="currentColor" strokeWidth="1"/>
      <path d="M18 900 C12 870 5 844 -8 818" fill="none" stroke="currentColor" strokeWidth="1"/>
      <path d="M48 900 C42 874 36 850 23 828" fill="none" stroke="currentColor" strokeWidth="1"/>
      <path d="M94 900 C89 878 84 856 72 836" fill="none" stroke="currentColor" strokeWidth="0.9"/>
      <path d="M176 900 C172 878 168 856 158 836" fill="none" stroke="currentColor" strokeWidth="0.9"/>
      <g transform="translate(20 495)">
        <path d="M0 6 C-4 28 -6 48 -8 68" fill="none" stroke="currentColor" strokeWidth="1"/>
        <circle cx="0" cy="0" r="5" fill="currentColor"/>
        {petals.map((a) => (
          <ellipse key={a} cx="0" cy="-13" rx="3" ry="6" fill="currentColor" opacity="0.75" transform={`rotate(${a})`}/>
        ))}
      </g>
      <g transform="translate(138 642)">
        <path d="M0 5 C4 26 6 46 8 64" fill="none" stroke="currentColor" strokeWidth="1"/>
        <circle cx="0" cy="0" r="4" fill="currentColor"/>
        {petals.map((a) => (
          <ellipse key={a} cx="0" cy="-11" rx="2.5" ry="5" fill="currentColor" opacity="0.75" transform={`rotate(${a})`}/>
        ))}
      </g>
      <circle cx="56" cy="594" r="2.2" fill="currentColor"/>
      <circle cx="93" cy="452" r="1.6" fill="currentColor"/>
      <circle cx="36" cy="734" r="1.9" fill="currentColor"/>
      <circle cx="124" cy="532" r="1.5" fill="currentColor"/>
      <circle cx="172" cy="824" r="1.3" fill="currentColor"/>
    </svg>
  );
}
