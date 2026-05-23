export default function BotanicalPanel({ mirrored = false }) {
  const p8 = [0, 45, 90, 135, 180, 225, 270, 315];
  const p6 = [0, 60, 120, 180, 240, 300];

  return (
    <svg
      className="bg-art-panel"
      style={mirrored ? { transform: "scaleX(-1)" } : undefined}
      viewBox="0 0 200 900"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ── STEM 1 — tallest ── */}
      <path d="M30 900 C27 800 35 690 30 578 C25 468 33 358 28 248 C24 158 30 92 34 30"
            fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <ellipse cx="33" cy="22" rx="5" ry="20" fill="currentColor" transform="rotate(4 33 22)"/>
      <path d="M29 38 L19 22 M33 32 L23 18 M35 25 L44 11 M33 32 L42 18"
            fill="none" stroke="currentColor" strokeWidth="0.9"/>
      {/* leaves on stem 1 */}
      <path d="M30 700 C14 680 3 658 -3 634" fill="none" stroke="currentColor" strokeWidth="1.1"/>
      <path d="M30 700 C46 680 57 658 63 634" fill="none" stroke="currentColor" strokeWidth="1.1"/>
      <path d="M30 500 C15 478 5 454 -1 428" fill="none" stroke="currentColor" strokeWidth="1"/>
      <path d="M30 500 C45 478 55 454 61 428" fill="none" stroke="currentColor" strokeWidth="1"/>
      <path d="M29 310 C16 290 7 268 3 244" fill="none" stroke="currentColor" strokeWidth="0.9"/>
      <path d="M29 310 C42 290 51 268 55 244" fill="none" stroke="currentColor" strokeWidth="0.9"/>

      {/* ── STEM 2 ── */}
      <path d="M80 900 C76 820 84 740 78 652 C72 568 80 496 74 416 C70 355 76 308 73 256"
            fill="none" stroke="currentColor" strokeWidth="1.2"/>
      <ellipse cx="72" cy="239" rx="4.5" ry="17" fill="currentColor" transform="rotate(-5 72 239)"/>
      <path d="M68 254 L58 240 M72 249 L62 236 M74 242 L82 229"
            fill="none" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M78 652 C92 635 104 614 110 590" fill="none" stroke="currentColor" strokeWidth="1"/>
      <path d="M78 800 C63 783 52 762 45 737" fill="none" stroke="currentColor" strokeWidth="1"/>

      {/* ── STEM 3 — shorter ── */}
      <path d="M148 900 C144 836 156 766 148 686 C140 614 152 555 144 480 C138 420 144 376 141 330"
            fill="none" stroke="currentColor" strokeWidth="1.1"/>
      <ellipse cx="140" cy="314" rx="4" ry="15" fill="currentColor" transform="rotate(-8 140 314)"/>
      <path d="M136 329 L127 315 M140 324 L131 310 M142 317 L150 304"
            fill="none" stroke="currentColor" strokeWidth="0.75"/>
      <path d="M148 760 C161 744 172 724 178 700" fill="none" stroke="currentColor" strokeWidth="0.9"/>

      {/* ── FERN FROND off stem 2 ── */}
      <path d="M78 502 C100 476 124 454 150 442" fill="none" stroke="currentColor" strokeWidth="0.95"/>
      <path d="M89 494 C84 480 82 465 85 451" fill="none" stroke="currentColor" strokeWidth="0.65"/>
      <path d="M89 494 C94 480 97 465 94 451" fill="none" stroke="currentColor" strokeWidth="0.65"/>
      <path d="M104 483 C99 468 98 452 101 437" fill="none" stroke="currentColor" strokeWidth="0.65"/>
      <path d="M104 483 C109 468 111 452 108 437" fill="none" stroke="currentColor" strokeWidth="0.65"/>
      <path d="M121 471 C117 456 116 440 119 424" fill="none" stroke="currentColor" strokeWidth="0.6"/>
      <path d="M121 471 C125 456 127 440 124 424" fill="none" stroke="currentColor" strokeWidth="0.6"/>

      {/* ── WILDFLOWER 1 — 8 petals ── */}
      <g transform="translate(22 504)">
        <path d="M0 6 C-4 28 -7 52 -9 74" fill="none" stroke="currentColor" strokeWidth="1"/>
        <circle cx="0" cy="0" r="5.5" fill="currentColor"/>
        {p8.map((a) => (
          <ellipse key={a} cx="0" cy="-14" rx="3" ry="6.5" fill="currentColor" opacity="0.72" transform={`rotate(${a})`}/>
        ))}
      </g>

      {/* ── WILDFLOWER 2 — 6 petals, smaller ── */}
      <g transform="translate(166 638)">
        <path d="M0 5 C4 26 6 46 8 65" fill="none" stroke="currentColor" strokeWidth="0.9"/>
        <circle cx="0" cy="0" r="3.5" fill="currentColor"/>
        {p6.map((a) => (
          <ellipse key={a} cx="0" cy="-10" rx="2.5" ry="5" fill="currentColor" opacity="0.72" transform={`rotate(${a})`}/>
        ))}
      </g>

      {/* ── GEOMETRIC DIAMOND ACCENTS ── */}
      <path d="M176 282 L183 292 L176 302 L169 292 Z" fill="none" stroke="currentColor" strokeWidth="0.65"/>
      <path d="M59 832 L64 840 L59 848 L54 840 Z" fill="none" stroke="currentColor" strokeWidth="0.55"/>
      <path d="M123 562 L128 570 L123 578 L118 570 Z" fill="none" stroke="currentColor" strokeWidth="0.55"/>
      <path d="M10 170 L14 177 L10 184 L6 177 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>

      {/* ── SEED / DOT SCATTER ── */}
      <circle cx="57" cy="596" r="2.2" fill="currentColor"/>
      <circle cx="94" cy="454" r="1.6" fill="currentColor"/>
      <circle cx="37" cy="736" r="2" fill="currentColor"/>
      <circle cx="124" cy="540" r="1.5" fill="currentColor"/>
      <circle cx="173" cy="828" r="1.3" fill="currentColor"/>
      <circle cx="10" cy="392" r="1.4" fill="currentColor"/>
      <circle cx="156" cy="704" r="1.7" fill="currentColor"/>
      <circle cx="186" cy="462" r="1.2" fill="currentColor"/>

      {/* ── SMALL CROSS ACCENTS ── */}
      <path d="M189 382 L189 392 M184 387 L194 387" fill="none" stroke="currentColor" strokeWidth="0.55"/>
      <path d="M6 614 L6 623 M1 618 L11 618" fill="none" stroke="currentColor" strokeWidth="0.5"/>
      <path d="M136 852 L136 861 M131 856 L141 856" fill="none" stroke="currentColor" strokeWidth="0.5"/>
    </svg>
  );
}
