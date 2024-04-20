import { test, expect } from "vitest";
import { isPriceInRange } from "../src/isPriceInRange";
test("Test de la fonction isPriceInRAnge", () => {

    const val_Inf =isPriceInRange(12,12,15);

    const val_Sup = isPriceInRange(15,12,15);

    const val = isPriceInRange(14,12,15);

    const val_Dehors=isPriceInRange(16,12,15)

    expect(val_Inf).toBeTruthy();
    expect(val_Sup).toBeTruthy();
    expect(val).toBeTruthy();
    expect(val_Dehors).toBeFalsy();
});