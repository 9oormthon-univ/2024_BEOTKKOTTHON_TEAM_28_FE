import { expect, test } from '@playwright/test';

test.describe('랜딩 페이지(LD)를 테스트한다', () => {
  let page;

  test.beforeAll(async ({ browser, contextOptions }) => {
    const browserContext = await browser.newContext(contextOptions);
    page = await browserContext.newPage();

    await page.goto('https://www.startupvalley.site/');
  });

  test('LD-2. 디스코드 봇 추가하기 버튼을 누르면 디스코드봇 연결 페이지가 나온다', async () => {
    await page.click('body > header > div > nav > div > a:nth-child(3)');

    await expect(page).toHaveURL(
      'https://discord.com/oauth2/authorize?client_id=1214574551820800040&permissions=8&scope=bot',
    );
  });

  test('LD-3. footer의 노션 텍스트를 클릭하면 노션 페이지로 이동한다', async () => {
    await page.click('body > footer > div > nav > div');

    await expect(page).toHaveURL('https://www.startupvalley.site/login');
  });
});
