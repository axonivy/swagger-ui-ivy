import { test, expect } from '@playwright/test';

test('swagger ui renderer', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/API Browser/);
  await expect(page.getByText('Authorize')).toBeVisible();

  // assert response is parsed
  await expect(page.locator("#operations-demo-getPersons")).toBeVisible();
  await page.locator("#operations-demo-getPersons").click();
  await expect(page.locator("#operations-demo-getPersons div.highlight-code"))
  .toHaveText(/.*"firstname"/);
});
