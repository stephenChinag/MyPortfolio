const ITEMS = [
  // ── code snippets
  { t: "const passion = skills + dedication",              x:  7, y:  8, r:  -6, mono: true  },
  { t: "while(alive) { code(); ship(); repeat() }",        x: 57, y:  5, r:   4, mono: true  },
  { t: 'git commit -m "shipped it"',                       x: 74, y: 30, r: -10, mono: true  },
  { t: "return effort > fear ? success : keepGoing",       x:  4, y: 47, r:   7, mono: true  },
  { t: "// TODO: change the world",                        x: 42, y: 37, r:  -3, mono: true  },
  { t: "useState() · useEffect() · useMemo()",             x: 54, y: 60, r:   5, mono: true  },
  { t: "npm run build && deploy",                          x:  9, y: 81, r:   8, mono: true  },
  { t: "<PixelPerfect />",                                 x: 78, y: 84, r: -12, mono: true  },
  { t: "async function dream() { await execute() }",       x:  6, y: 93, r:  -5, mono: true  },
  { t: "O(n) · optimise · ship",                          x: 63, y: 72, r:   9, mono: true  },
  { t: "type Engineer = Skills & Passion & Grit",          x: 30, y: 18, r:  -7, mono: true  },
  { t: "const ui = design.translate(code)",                x: 46, y: 90, r:   6, mono: true  },
  // ── quotes
  { t: '"The only way to do great work is to love what you do." — Steve Jobs',     x: 13, y: 23, r:  -4, mono: false },
  { t: '"First, solve the problem. Then, write the code."',                         x: 49, y: 14, r:   3, mono: false },
  { t: '"Work hard in silence, let success make the noise."',                       x:  5, y: 65, r:  -6, mono: false },
  { t: '"Programs must be written for people to read." — Harold Abelson',           x: 57, y: 44, r:   7, mono: false },
  { t: '"The expert in anything was once a beginner."',                             x: 24, y: 55, r:  -3, mono: false },
  { t: '"Code is craft. Every pixel is a decision."',                               x: 69, y: 52, r:  11, mono: false },
  { t: '"Smart effort, not just hard effort."',                                     x: 34, y: 76, r:  -8, mono: false },
  { t: '"Opportunities don\'t happen. You create them." — Chris Grosser',           x: 16, y: 35, r:   5, mono: false },
];

export default function BackgroundText() {
  return (
    <div className="bg-text" aria-hidden="true">
      {ITEMS.map((item, i) => (
        <span
          key={i}
          className={`bg-text-item${item.mono ? " mono" : " serif"}`}
          style={{ left: `${item.x}%`, top: `${item.y}%`, transform: `rotate(${item.r}deg)` }}
        >
          {item.t}
        </span>
      ))}
    </div>
  );
}
