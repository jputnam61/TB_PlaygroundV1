export const dialogTestExample = `
// Alert Dialog interaction tests
test('should handle dialog interactions', async ({ page }) => {
  // Open dialog
  await page.getByTestId('button-show-dialog').click();
  
  // Verify dialog is visible
  await expect(page.getByRole('alertdialog')).toBeVisible();
  
  // Verify dialog content
  await expect(page.getByRole('alertdialog')).toContainText('Are you sure?');
  
  // Cancel dialog
  await page.getByTestId('button-dialog-cancel').click();
  await expect(page.getByRole('alertdialog')).not.toBeVisible();
  
  // Confirm dialog action
  await page.getByTestId('button-show-dialog').click();
  await page.getByTestId('button-dialog-continue').click();
  await expect(page.getByRole('alertdialog')).not.toBeVisible();
});`;