import { expect, test } from '@playwright/test';

test.describe('레이아웃 컴포넌트를 테스트한다', () => {
  let page;

  test.beforeAll(async ({ browser, contextOptions }) => {
    const browserContext = await browser.newContext(contextOptions);
    page = await browserContext.newPage();

    await page.goto('https://www.startupvalley.site/');
  });

  test('document title이 올바르다', async () => {
    await expect(page).toHaveTitle('Startup Valley');
  });

  test('footer의 copyright가 올바르다', async () => {
    const copyrightFooter = await page.locator('body > footer > div > div > p.copyright');

    const validCopyright = '@2024 startupvalley.all rights reserved';

    await expect(copyrightFooter).toHaveText(validCopyright);
  });

  test('accessToken이 없을 때 로그인 버튼을 누르면 로그인 페이지로 이동한다', async () => {
    await page.click('body > header > div > nav > div > a:nth-child(3)');

    await expect(page).toHaveURL('https://www.startupvalley.site/login');
  });

  test('accessToken이 있을 때 팀 변경 버튼을 누르면 모달이 뜬다', async () => {
    await page.click('body > header > div > nav > div > a:nth-child(3)');

    await expect(page).toHaveId('portal-modal');
  });
});
