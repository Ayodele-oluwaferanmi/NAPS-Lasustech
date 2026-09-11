export const materials = [
  { code: "PHY 101", title: "Mechanics & Properties of Matter", level: "100L", type: "Past questions", downloads: "248" },
  { code: "PHY 204", title: "Electricity & Magnetism II", level: "200L", type: "Study guide", downloads: "192" },
  { code: "PHY 305", title: "Quantum Mechanics I", level: "300L", type: "Past questions", downloads: "164" },
];

export function filterStudyMaterials(query: string, level: string) {
  return materials.filter((item) => `${item.code} ${item.title}`.toLowerCase().includes(query.toLowerCase()) && (level === "All levels" || item.level === level));
}
