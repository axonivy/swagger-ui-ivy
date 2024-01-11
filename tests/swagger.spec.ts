import { test, expect } from '@playwright/test';

test('swagger ui renderer', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/API Browser/);
  await expect(page.getByText('Authorize')).toBeVisible();
});
