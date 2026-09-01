/**
 * Reproduces the user gesture: pick a column header up and drop it clear of the grid,
 * which is what makes AG Grid hide the column on its own.
 */
export async function dragColumnOffGrid(page, field) {
    const header = await page
        .locator(`.ag-header-cell[col-id="${field}"]`)
        .boundingBox();
    const grid = await page.locator('.ag-root-wrapper').boundingBox();
    await page.mouse.move(header.x + header.width / 2, header.y + header.height / 2);
    await page.mouse.down();
    await page.mouse.move(header.x + header.width / 2, header.y + header.height / 2 + 20, { steps: 5 });
    await page.mouse.move(grid.x + grid.width / 2, grid.y + grid.height + 200, {
        steps: 10,
    });
    await page.mouse.up();
    await page.waitForChanges();
}
