import { describe, expect, it } from "vitest";
import { paymentWorkflowSteps } from "./FeatureViews";

describe("payment workflow", () => {
  it("keeps the secure dues flow in the correct order", () => {
    expect(paymentWorkflowSteps.map(([number]) => number)).toEqual(["01", "02", "03"]);
    expect(paymentWorkflowSteps[1]?.[1]).toBe("Verify transaction");
    expect(paymentWorkflowSteps[2]?.[1]).toBe("Activate benefits");
  });
});
