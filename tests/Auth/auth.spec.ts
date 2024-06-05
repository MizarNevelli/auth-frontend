import { test, expect } from "@playwright/test";

test("Create new user", async ({ page }) => {
  await page.goto(`${process.env.NEXT_PUBLIC_SITE_URL}/register`);

  await page.getByPlaceholder("Choose your name").fill("PW_test_user");
  await page
    .getByPlaceholder("Insert your email")
    .fill("test@gmail.com" + Math.random().toFixed(3));
  await page.getByPlaceholder("Choose your password").fill("123456");

  await page.getByRole("button", { name: "register" }).click();

  await expect(
    page.getByText("Your request is successfully completed. Check your email!")
  ).toBeVisible();
});

test("Login", async ({ page }) => {
  await page.goto(`${process.env.NEXT_PUBLIC_SITE_URL}/login`);
  await page
    .getByPlaceholder("Insert your email")
    .fill(process.env.NEXT_PUBLIC_TEST_USER as string);
  await page
    .getByPlaceholder("Insert your password")
    .fill(process.env.NEXT_PUBLIC_TEST_PSW as string);

  await page.getByRole("button", { name: "login" }).click(); // if name=login-btn does not work why??

  await page.waitForURL(`${process.env.NEXT_PUBLIC_SITE_URL}/`);
  await expect(page.getByText("Home page")).toBeVisible();
});
