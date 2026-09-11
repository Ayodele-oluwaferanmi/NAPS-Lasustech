import { describe, expect, it } from "vitest";
import { filterStudyMaterials } from "@/lib/materials";

describe("study material filters", () => {
  it("matches course code or title case-insensitively", () => {
    const result = filterStudyMaterials("quantum", "All levels");
    expect(result).toHaveLength(1);
    expect(result[0]?.code).toBe("PHY 305");
  });

  it("limits the archive to the selected level", () => {
    const result = filterStudyMaterials("", "200L");
    expect(result).toHaveLength(1);
    expect(result[0]?.code).toBe("PHY 204");
  });
});
