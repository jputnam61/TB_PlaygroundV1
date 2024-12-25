export const dropdownTestExample = `
// Dropdown interaction tests
test('should handle dropdown interactions', async ({ page }) => {
  // Basic dropdown
  await page.getByTestId('basic-dropdown').click();
  await page.getByTestId('option-1').click();
  
  // Searchable dropdown
  await page.getByTestId('searchable-dropdown').click();
  await page.getByPlaceholder('Search framework...').fill('play');
  await page.getByTestId('framework-playwright').click();
  await expect(page.getByTestId('searchable-dropdown')).toContainText('Playwright');
});`;