export const accordionTestExample = `
// Accordion interaction tests
test('should handle accordion interactions', async ({ page }) => {
  // Open first accordion item
  await page.getByTestId('accordion-trigger-1').click();
  await expect(page.getByTestId('accordion-content-1')).toBeVisible();
  
  // Verify first content is visible and second is hidden
  await expect(page.getByTestId('accordion-content-1')).toBeVisible();
  await expect(page.getByTestId('accordion-content-2')).not.toBeVisible();
  
  // Open second accordion item
  await page.getByTestId('accordion-trigger-2').click();
  await expect(page.getByTestId('accordion-content-2')).toBeVisible();
  
  // Close first accordion item
  await page.getByTestId('accordion-trigger-1').click();
  await expect(page.getByTestId('accordion-content-1')).not.toBeVisible();
});`;