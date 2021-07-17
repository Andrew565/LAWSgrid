export const gridConstants = {
  e: "EMPTY",
  EMPTY: "e",

  s: "SLOT",
  SLOT: "s",

  f: "FOUNDATION",
  FOUNDATION: "f",

  r: "ROW",
  ROW: "r",

  d: "DRAW PILE",
  DRAW_PILE: "d",

  w: "WASTE PILE",
  WASTE_PILE: "w",

  l: "LIMIT",
  LIMIT: "l",

  n: "NO LIMIT",
  NO_LIMIT: "n",

  h: "HORIZONTAL",
  HORIZONTAL: "h",

  t: "TILT LEFT",
  TILT_LEFT: "t",

  i: "TILT RIGHT",
  TILT_RIGHT: "i",

  q: "FACE DOWN",
  FACE_DOWN: "q",

  p: "FACE UP",
  FACE_UP: "p"
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
    GC.TILT_RIGHT
  ]
};

/**
 * @typedef {{rows: LAWSRow[]}} LAWSGrid
 *
 * @typedef {LAWSSlot[]} LAWSRow
 *
 * @typedef LAWSSlot
 * @property {'EMPTY' | 'SLOT' | 'DRAW_PILE' | 'WASTE_PILE'} slotType
 * @property {LAWSModifier[]} modifiers
 * @property {object[]} content
 *
 * @typedef {{kind: string, quantity?: number}} LAWSModifier
 */
