import { test, expect } from "@playwright/test";

test("Should create new user", async ({ page }) => {
  await page.goto(`${process.env.NEXT_PUBLIC_SITE_URL}/register`);

  await page
    .getByTestId("registerUserName")
    .fill(process.env.TEST_USER_NAME as string);

  await page
    .getByTestId("registerUserMail")
    .fill(process.env.TEST_USER_MAIL + Math.random().toFixed(3));

  await page
    .getByTestId("registerUserPsw")
    .fill(process.env.TEST_USER_PSW as string);

  await page.getByRole("button", { name: "register" }).click();

  await expect(
    page.getByText("Your request is successfully completed. Check your email!")
  ).toBeVisible();
});

test("Should perform login", async ({ page }) => {
  await page.goto(`${process.env.NEXT_PUBLIC_SITE_URL}/login`);
  await page
    .getByTestId("loginEmail")
    .fill(process.env.TEST_USER_MAIL as string);
  await page.getByTestId("loginPsw").fill(process.env.TEST_USER_PSW as string);

  await page.getByRole("button", { name: "login" }).click(); // if name=login-btn does not work Wtf??

  await page.waitForURL(`${process.env.NEXT_PUBLIC_SITE_URL}/`);
  await expect(page.getByText("Home page")).toBeVisible();
});
