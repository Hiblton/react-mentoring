import { renderHook } from "@testing-library/react-hooks";
import { useUpdateEffect } from "./CustomHooks";

describe("CustomHook", () => {
  describe("useUpdateEffect", () => {
    it("should call effect only after update dependencies", () => {
      const effectToTrigger = jest.fn();

      let triggerDep = 0;
      const { result, rerender } = renderHook(() =>
        useUpdateEffect(effectToTrigger, [triggerDep])
      );

      expect(effectToTrigger).toHaveBeenCalledTimes(0);
      expect(result.current).toBeUndefined();

      // change dependency
      triggerDep = 1;
      rerender(triggerDep);
      expect(effectToTrigger).toHaveBeenCalledTimes(1);

      // change dependency
      triggerDep = 2;
      rerender(triggerDep);
      expect(effectToTrigger).toHaveBeenCalledTimes(2);

      // do not change dependency
      rerender(triggerDep);
      expect(effectToTrigger).toHaveBeenCalledTimes(2);
    });
  });
});
