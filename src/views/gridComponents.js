import { gridConstants as GC } from "../logic/gridConstants.js";

/** @param {string} className */
export const lgc = (className) => `lawsGrid-${className}`;

/** @param {import("../logic/gridConstants").LAWSGrid} gridLayout */
const gridContainer = (gridLayout) => {
  const gridRows = gridLayout.rows.map((slots) => gridRow(slots)).join("\n");
  return `<section class="${lgc(GC.CONTAINER)}">${gridRows}</section>`;
};

/** @param {import("../logic/gridConstants").LAWSSlot[]} slots */
const gridRow = (slots) => {
  const rowSlots = slots.map((slot) => gridSlot(slot)).join("\n");
  return `<div class="${lgc(GC.ROW)}">${rowSlots}</div>`;
};

/** @param {import("../logic/gridConstants").LAWSSlot} slot */
const gridSlot = (slot) => {
  let modClasses = slot.modifiers ? " " + slot.modifiers.map((mod) => lgc(mod.kind)).join(" ") : "";
  if (slot.slotType === GC.EMPTY) modClasses += ` ${lgc(GC.EMPTY)}`;

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
