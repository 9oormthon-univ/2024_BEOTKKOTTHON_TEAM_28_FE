import { expect, test } from '@playwright/test';

test.describe('팀 메인 페이지(TM)를 테스트한다', () => {
  let page;

  test.beforeAll(async ({ browser, contextOptions }) => {
    const browserContext = await browser.newContext(contextOptions);
    page = await browserContext.newPage();

    await page.goto('https://www.startupvalley.site/team-task-history');
  });

  test('MT-NO-1. 로그인이 되어있지 않거나 프로젝트가 없으면 미연결 컴포넌트를 보여준다', async () => {
    const ContendBannerCard = await page.locator('body > div > div');

    const validStatement = '스타트업밸리로 다른 사람들과 함께 업무를 진행해봐요!';

    await expect(ContendBannerCard).toHaveText(validStatement);
  });

  test('MT-2. 프로젝트명, 팀원 수, 개인 프로필, 직무, 이름을 표출한다', async () => {
    const ContendBannerCard = await page.locator('body > div > div');

    const validStatement = '스타트업밸리로 다른 사람들과 함께 업무를 진행해봐요!';

    await expect(ContendBannerCard).toHaveText(validStatement);
  });

  test('MT-2. 팀 멤버 정보를 개별 클릭하면 각자의 대시보드로 이동한다', async () => {
    // ...
  });
  test('MT-3. 팀 작업 척도에서 4가지 이상의 카드를 통해 보여준다', async () => {
    // ...
  });
  test('MT-4. 업무 업로드 폼에서 나의 이미지를 표출하고, 작성요청을 보낸다', async () => {
    // ...
  });
  test('MT-5. 현재 작업 기록에서 스크럼을 클릭하면 작업기록으로 이동한다', async () => {
    // ...
  });
  test('MT-6. 팀 질문요소 요약에서 더보기를 클릭하면 질문요청 페이지로 이동한다', async () => {
    // ...
  });
});
