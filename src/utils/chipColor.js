const light = [
  { bg: "#E5EEFF", color: "#1D4ED8" },
  { bg: "#EDE5FF", color: "#7C3AED" },
  { bg: "#E5FFF2", color: "#047857" },
  { bg: "#FFF4E5", color: "#B45309" },
  { bg: "#FFE5F2", color: "#BE185D" },
  { bg: "#E5FBFF", color: "#0E7490" },
  { bg: "#FFFBE5", color: "#92400E" },
  { bg: "#F0FFE5", color: "#3D6B0D" },
];
const dk = [
  { bg: "rgba(29,78,216,0.2)", color: "#93B4FF" },
  { bg: "rgba(124,58,237,0.2)", color: "#C4AAFF" },
  { bg: "rgba(4,120,87,0.2)", color: "#6EE7B7" },
  { bg: "rgba(180,83,9,0.2)", color: "#FCD34D" },
  { bg: "rgba(190,24,93,0.2)", color: "#FBAACC" },
  { bg: "rgba(14,116,144,0.2)", color: "#67E8F9" },
  { bg: "rgba(146,64,14,0.2)", color: "#FDE68A" },
  { bg: "rgba(61,107,13,0.2)", color: "#A3E635" },
];

export function chipColor(name, dark) {
  const hash = name.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  return (dark ? dk : light)[hash % 8];
}
