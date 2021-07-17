import { isValidLayout } from "./LAWSgrid";
import { gridConstants as GC } from "./gridConstants";

/** @type {import ('./gridConstants').LAWSGrid} */
const acesUpLayout = {
  rows: [
    { slotType: "DRAW_PILE", modifiers: null, content: null },
    { slotType: "SLOT" },
    { slotType: "SLOT" },
    { slotType: "SLOT" },
    { slotType: "SLOT" },
    { slotType: "WASTE_PILE", modifiers: null, content: null }
  ]
};

/** @type {import ('./gridConstants').LAWSGrid} */
const clearTheDungeonLayout = {
  rows: [
    [
      { slotType: "SLOT", modifiers: [{ kind: GC.FACE_DOWN }] },
      { slotType: "SLOT", modifiers: [{ kind: GC.FACE_DOWN }] },
      { slotType: "SLOT", modifiers: [{ kind: GC.FACE_DOWN }] },
      { slotType: "SLOT", modifiers: [{ kind: GC.FACE_DOWN }] }
    ],
    [
      { slotType: "SLOT", modifiers: [{ kind: GC.FACE_DOWN }] },
      { slotType: "SLOT", modifiers: [{ kind: GC.FACE_DOWN }] },
      { slotType: "SLOT", modifiers: [{ kind: GC.FACE_DOWN }] },
      { slotType: "SLOT", modifiers: [{ kind: GC.FACE_DOWN }] }
    ],
    [
      { slotType: "SLOT", modifiers: [{ kind: GC.FACE_UP }] },
      { slotType: "SLOT", modifiers: [{ kind: GC.FACE_UP }] },
      { slotType: "SLOT", modifiers: [{ kind: GC.FACE_UP }] },
      { slotType: "SLOT", modifiers: [{ kind: GC.FACE_UP }] }
    ],
    [
      { slotType: "SLOT", modifiers: [{ kind: GC.LIMIT, quantity: 1 }] },
      { slotType: "SLOT", modifiers: [{ kind: GC.LIMIT, quantity: 1 }] },
      { slotType: "SLOT", modifiers: [{ kind: GC.LIMIT, quantity: 1 }] },
      { slotType: "SLOT", modifiers: [{ kind: GC.LIMIT, quantity: 1 }] }
    ]
  ]
};

it("should know an invalid layout object when it sees one", () => {
  const badLayout = "abcde";
  expect(isValidLayout(badLayout)).toBe(false);

  const badLayout2 = {};
  expect(isValidLayout(badLayout2)).toBe(false);

  const badLayout3 = {
    rows: { slotType: "ROW", content: [] }
  };
  expect(isValidLayout(badLayout3)).toBe(false);

  const badLayout4 = [{ slotType: "ROW", content: [] }];
  expect(isValidLayout(badLayout4)).toBe(false);
});

it("should know a valid LAWSGrid when it sees one", () => {
  expect(isValidLayout(acesUpLayout)).toBe(true);
  expect(isValidLayout(clearTheDungeonLayout)).toBe(true);
});

it("should create a valid html layout from a valid LAWSGrid", () => {
  const AcesUpLayout = "";
});
