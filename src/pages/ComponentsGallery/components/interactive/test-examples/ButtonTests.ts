export const buttonTestExample = `
// Button variant tests
test('should interact with different button variants', async ({ page }) => {
  // Default button
  await page.getByTestId('button-default').click();
  
  // Secondary button
  await page.getByTestId('button-secondary').click();
  
  // Destructive button
  await page.getByTestId('button-destructive').click();
  
  // Outline button
  await page.getByTestId('button-outline').click();
  
  // Ghost button
  await page.getByTestId('button-ghost').click();
  
  // Link button
  await page.getByTestId('button-link').click();
  
  // Verify button states
  await expect(page.getByTestId('button-default')).toBeEnabled();
  await expect(page.getByTestId('button-destructive')).toHaveClass(/destructive/);
});`;