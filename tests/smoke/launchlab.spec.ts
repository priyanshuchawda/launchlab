import { expect, type Page, test } from "@playwright/test";

async function expectNoHorizontalOverflow(page: Page) {
  const overflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth -
      document.documentElement.clientWidth,
  );

  expect(overflow).toBeLessThanOrEqual(0);
}

test("landing routes into the app and keeps the viewport stable", async ({
  page,
}) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: /launch experiments faster than competitors can write specs/i,
    }),
  ).toBeVisible();
  await expect(page.getByLabel(/launch command center/i)).toBeVisible();
  await expect(page.getByText(/before launchlab/i)).toBeVisible();
  await expect(page.getByText(/after launchlab/i)).toBeVisible();
  await expectNoHorizontalOverflow(page);
  await page.waitForLoadState("networkidle");

  const demoLink = page.getByRole("link", { name: /try live demo/i });
  await expect(demoLink).toHaveAttribute("href", "/app");
  await page.goto((await demoLink.getAttribute("href")) ?? "/app");

  await expect(page).toHaveURL(/\/app$/);
  await expect(
    page.getByRole("heading", {
      name: /growth cockpit/i,
    }),
  ).toBeVisible();
  await expectNoHorizontalOverflow(page);
});

test("app generates experiments, ships one, and opens a landing variant", async ({
  page,
}) => {
  await page.goto("/app");
  await page.evaluate(() => localStorage.clear());
  await page.reload();

  await page
    .getByLabel(/startup growth goal/i)
    .fill("Increase signup conversion for my AI notes app");
  await page.getByRole("button", { name: /generate experiments/i }).click();

  await expect(page.getByText(/6 ready/i)).toBeVisible();
  const firstCard = page.getByTestId("experiment-card").first();

  await page
    .getByRole("button", { name: /mark signup proof strip as shipped/i })
    .click();
  await expect(
    page.getByText(/signup proof strip marked as shipped/i),
  ).toBeVisible();
  await expect(firstCard).toHaveAttribute("data-status", "shipped");
  await expect(firstCard.getByText(/shipped to ship log/i)).toBeVisible();

  await page
    .getByRole("button", {
      name: /turn signup proof strip into landing page/i,
    })
    .click();
  await expect(firstCard).toHaveAttribute("data-selected", "true");
  await expect(page.getByText(/selected insight/i)).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /a\/b landing preview/i }),
  ).toBeVisible();
});

test("mobile command menu opens from the app workspace", async ({ page }) => {
  await page.goto("/app");

  await page.getByRole("button", { name: /open command menu/i }).click();

  await expect(
    page.getByRole("dialog", { name: /command menu/i }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /read case study/i }),
  ).toBeVisible();
  await expectNoHorizontalOverflow(page);
});
