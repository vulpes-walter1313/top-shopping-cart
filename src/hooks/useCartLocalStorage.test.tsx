import useCartLocalStorage from "./useCartLocalStorage";
import React from "react";
import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("testing useCartLocalStorage Hook", () => {
  test("Cart init works",() => {
    const {result} = renderHook(() => useCartLocalStorage());
    expect(result.current[0]).toHaveLength(0);
  });
  test("adding 1 item to cart",() => {
    const {result} = renderHook(() => useCartLocalStorage());
    act(() => {
      result.current[1]({type: "add", payload: {id: 1, quantity: 1}});
    });
    expect(result.current[0]).toHaveLength(1);
    expect(result.current[0][0]).toStrictEqual({productId: 1, quantity: 1});
  });
})