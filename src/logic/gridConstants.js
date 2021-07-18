/**
 * @typedef {{rows: LAWSRow[]}} LAWSGrid
 *
 * @typedef {LAWSSlot[]} LAWSRow
 *
 * @typedef LAWSSlot
 * @property {'EMPTY' | 'SLOT' | 'DRAW_PILE' | 'WASTE_PILE'} slotType
 * @property {LAWSModifier[]=} modifiers
 * @property {object[]=} content
 *
 * @typedef {{kind: string, quantity?: number}} LAWSModifier
 */

export const gridConstants = {
  CONTAINER: "container",
  EMPTY: "empty",
  SLOT: "slot",
  FOUNDATION: "foundation",
  ROW: "row",
  DRAW_PILE: "drawPile",
  WASTE_PILE: "wastePile",
  LIMIT: "limited",
  NO_LIMIT: "noLimit",
  HORIZONTAL: "horizontal",
  TILT_LEFT: "tiltLeft",
  TILT_RIGHT: "tiltRight",
  FACE_DOWN: "faceDown",
  FACE_UP: "faceUp",
};

const GC = gridConstants;

export const GCTypes = {
  containers: [GC.EMPTY, GC.SLOT, GC.ROW],
  content: [GC.DRAW_PILE, GC.WASTE_PILE],
  modifiers: [
    GC.FACE_DOWN,
    GC.FACE_UP,
    GC.FOUNDATION,
    GC.HORIZONTAL,
    GC.LIMIT,
    GC.NO_LIMIT,
    GC.TILT_LEFT,
    GC.TILT_RIGHT,
  ],
};
