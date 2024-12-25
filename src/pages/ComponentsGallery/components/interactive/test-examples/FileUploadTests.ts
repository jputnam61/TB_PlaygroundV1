export const fileUploadTestExample = `
// File upload interaction tests
test('should handle file upload interactions', async ({ page }) => {
  // Upload file
  const fileInput = page.getByTestId('file-input');
  await fileInput.setInputFiles('path/to/file.txt');
  
  // Verify file preview
  await expect(page.getByTestId('file-preview')).toBeVisible();
  
  // Remove uploaded file
  await page.getByTestId('remove-file').click();
  await expect(page.getByTestId('file-preview')).not.toBeVisible();
});`;