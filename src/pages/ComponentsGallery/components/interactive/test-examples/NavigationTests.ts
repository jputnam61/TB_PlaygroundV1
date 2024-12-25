export const navigationTestExample = `
// Navigation menu hover and click tests
test('should handle hover menu interactions', async ({ page }) => {
  // Hover over main menu item
  await page.getByTestId('menu-trigger').hover();
  
  // Wait for submenu to be visible
  // Important: Always wait for hover menu to appear before interacting
  await expect(page.getByTestId('sub-menu-1'))
    .toBeVisible({ timeout: 1000 });
  
  // Click first submenu item
  await page.getByTestId('sub-menu-1').click();
  
  // Test second submenu item
  await page.getByTestId('menu-trigger').hover();
  await expect(page.getByTestId('sub-menu-2'))
    .toBeVisible({ timeout: 1000 });
  await page.getByTestId('sub-menu-2').click();
  
  // Alternative approach using waitFor
  await page.getByTestId('menu-trigger').hover();
  await page.waitForSelector('[data-testid="sub-menu-1"]', {
    state: 'visible',
    timeout: 1000
  });
  await page.getByTestId('sub-menu-1').click();
  
  // Verify hover menu closes
  await page.mouse.move(0, 0); // Move mouse away
  await expect(page.getByTestId('sub-menu-1'))
    .not.toBeVisible();
});

// Best practices for hover menu testing:
// 1. Always wait for submenu to be visible after hover
// 2. Use appropriate timeouts for animation completion
// 3. Consider testing both mouse enter/leave behaviors
// 4. Verify menu closes when focus is lost
// 5. Test keyboard navigation if supported
// 6. Test all submenu items are accessible
// 7. Verify correct menu item text is displayed`;