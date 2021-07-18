/// <reference types="jest" />
import { isValidLayout, makeGrid } from "./LAWSgrid";
import { gridConstants as GC } from "./gridConstants";
import { lgc } from "../views/gridComponents";

/** @type {import ('./gridConstants').LAWSGrid} */
const acesUpLayout = {
  rows: [
    [
      { slotType: "DRAW_PILE", modifiers: null, content: null },
      { slotType: "SLOT" },
      { slotType: "SLOT" },
      { slotType: "SLOT" },
      { slotType: "SLOT" },
      { slotType: "WASTE_PILE", modifiers: null, content: null },
    ],
  ],
};

/** @type {import ('./gridConstants').LAWSGrid} */
const clearTheDungeonLayout = {
  rows: [
    [
      { slotType: "SLOT", modifiers: [{ kind: GC.FACE_DOWN }] },
      { slotType: "SLOT", modifiers: [{ kind: GC.FACE_DOWN }] },
      { slotType: "SLOT", modifiers: [{ kind: GC.FACE_DOWN }] },
      { slotType: "SLOT", modifiers: [{ kind: GC.FACE_DOWN }] },
    ],
    [
      { slotType: "SLOT", modifiers: [{ kind: GC.FACE_DOWN }] },
      { slotType: "SLOT", modifiers: [{ kind: GC.FACE_DOWN }] },
      { slotType: "SLOT", modifiers: [{ kind: GC.FACE_DOWN }] },
      { slotType: "SLOT", modifiers: [{ kind: GC.FACE_DOWN }] },
    ],
    [
      { slotType: "SLOT", modifiers: [{ kind: GC.FACE_UP }] },
      { slotType: "SLOT", modifiers: [{ kind: GC.FACE_UP }] },
      { slotType: "SLOT", modifiers: [{ kind: GC.FACE_UP }] },
      { slotType: "SLOT", modifiers: [{ kind: GC.FACE_UP }] },
    ],
    [
      { slotType: "SLOT", modifiers: [{ kind: GC.LIMIT, quantity: 1 }] },
      { slotType: "SLOT", modifiers: [{ kind: GC.LIMIT, quantity: 1 }] },
      { slotType: "SLOT", modifiers: [{ kind: GC.LIMIT, quantity: 1 }] },
      { slotType: "SLOT", modifiers: [{ kind: GC.LIMIT, quantity: 1 }] },
    ],
  ],
};

it("should know an invalid layout object when it sees one", () => {
  const badLayout = "abcde";
  // @ts-ignore
  expect(isValidLayout(badLayout)).toBe(false);

  const badLayout2 = {};
  // @ts-ignore
  expect(isValidLayout(badLayout2)).toBe(false);

  const badLayout3 = {
    rows: { slotType: "ROW", content: [] },
  };
  // @ts-ignore
  expect(isValidLayout(badLayout3)).toBe(false);

  const badLayout4 = [{ slotType: "ROW", content: [] }];
  // @ts-ignore
  expect(isValidLayout(badLayout4)).toBe(false);
});

it("should know a valid LAWSGrid when it sees one", () => {
  expect(isValidLayout(acesUpLayout)).toBe(true);
  expect(isValidLayout(clearTheDungeonLayout)).toBe(true);
});

it("should create a container", () => {
  const gridContainer = `<section class="${lgc(GC.CONTAINER)}">`;
  const outputLayout = makeGrid(acesUpLayout);
  expect(outputLayout).toContain(gridContainer);

  const dungeonLayout = makeGrid(clearTheDungeonLayout);
  expect(dungeonLayout).toContain(gridContainer);
});

it("should create a row container", () => {
  const rowContainer = `<div class="${lgc(GC.ROW)}`;
  const outputLayout = makeGrid(acesUpLayout);
  expect(outputLayout).toContain(rowContainer);

  const dungeonLayout = makeGrid(clearTheDungeonLayout);
  expect(dungeonLayout).toContain(rowContainer);
});

it("should create a slot container", () => {
  const slotContainer = `<div class="${lgc(GC.SLOT)}`;
  const outputLayout = makeGrid(acesUpLayout);
  expect(outputLayout).toContain(slotContainer);

  const dungeonLayout = makeGrid(clearTheDungeonLayout);
  expect(dungeonLayout).toContain(slotContainer);
});

it("should create a slot container with modifiers", () => {
  const slotContainer = `<div class="${lgc(GC.SLOT)} ${lgc(GC.FACE_DOWN)}">`;
  const dungeonLayout = makeGrid(clearTheDungeonLayout);
  expect(dungeonLayout).toContain(slotContainer);
});

it("should create a slot container with modifiers and a limit", () => {
  const slotContainer = `<div class="${lgc(GC.SLOT)} ${lgc(GC.LIMIT)}" data-limited="1">`;
  const dungeonLayout = makeGrid(clearTheDungeonLayout);
  expect(dungeonLayout).toContain(slotContainer);
});
