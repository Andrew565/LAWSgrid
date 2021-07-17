/** @param {import("./gridConstants").LAWSGrid} layoutObject */
export const isValidLayout = (layoutObject) => {
  if (
    !layoutObject ||
    typeof layoutObject !== "object" ||
    !layoutObject.rows ||
    !Array.isArray(layoutObject.rows)
  )
    return false;

  layoutObject.rows.forEach((row) => {
    if (row.length === 0) return false;

    const slot = row[0];
    if (typeof slot !== "object" || !slot.slotType) return false;
  });

  return true;
};
