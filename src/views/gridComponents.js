import { gridConstants as GC } from "../logic/gridConstants";

/** @param {string} className */
export const lgc = (className) => `lawsGrid-${className}`;

/** @param {import("../logic/gridConstants").LAWSGrid} gridLayout */
const gridContainer = (gridLayout) => {
  const gridRows = gridLayout.rows.map((slots) => gridRow(slots));
  return `<section class="${lgc(GC.CONTAINER)}">${gridRows}</section>`;
};

/** @param {import("../logic/gridConstants").LAWSSlot[]} slots */
const gridRow = (slots) => {
  const rowSlots = slots.map((slot) => gridSlot(slot));
  return `<div class="${lgc(GC.ROW)}">${rowSlots}</div>`;
};

/** @param {import("../logic/gridConstants").LAWSSlot} slot */
const gridSlot = (slot) => {
  const modClasses = slot.modifiers ? " " + slot.modifiers.map((mod) => lgc(mod.kind)).join(" ") : "";

  let dataAttrs = "";
  const limit = slot.modifiers?.find((mod) => mod.kind === GC.LIMIT);
  if (limit) {
    dataAttrs += ` data-${GC.LIMIT}="${limit.quantity}"`;
  }

  return `<div class="${lgc(GC.SLOT)}${modClasses}"${dataAttrs}>&nbsp;</div>`;
};

export const gridComponents = {
  gridContainer,
  gridRow,
  gridSlot,
};
