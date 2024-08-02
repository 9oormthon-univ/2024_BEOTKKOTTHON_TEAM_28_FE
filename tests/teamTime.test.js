import { expect, test } from '@playwright/test';

test.describe('팀 업무 시간 수정 페이지(TT)를 테스트한다', () => {
  let page;

  test.beforeAll(async ({ browser, contextOptions }) => {
    const browserContext = await browser.newContext(contextOptions);
    page = await browserContext.newPage();

    await page.goto('https://www.startupvalley.site/3/manage');
  });

  test('TT-NO-1. 로그인이 되어있지 않거나 프로젝트가 없으면 미연결 컴포넌트를 보여준다', async () => {
    const contentBannerCard = await page.locator('body > div > div');
    const validStatement = '스타트업밸리로 다른 사람들과 함께 업무를 진행해봐요!';
    await expect(contentBannerCard).toHaveText(validStatement);
  });

  test('TT-2. 프로젝트명, 팀원 수, 개인 프로필, 직무, 이름을 표출한다', async () => {
    const projectName = await page.locator('.project-name');
    const teamMemberCount = await page.locator('.team-member-count');
    const profileNames = await page.locator('.profile-name');

    await expect(projectName).toBeVisible();
    await expect(teamMemberCount).toBeVisible();
    await expect(profileNames).toHaveCount(3); // assuming 3 team members for the example
  });

  test('TT-3. 팀 멤버 정보를 개별 클릭하면 각자의 대시보드로 이동한다', async () => {
    const teamMember = await page.locator('.team-member').first();
    await teamMember.click();
    await expect(page).toHaveURL(/.*\/dashboard/);
  });

  test('TT-4. 팀 작업 척도에서 4가지 이상의 카드를 통해 보여준다', async () => {
    const taskCards = await page.locator('.task-card');
    await expect(taskCards).toHaveCount(4);
  });

  test('TT-5. 업무 업로드 폼에서 나의 이미지를 표출하고, 작성요청을 보낸다', async () => {
    const uploadForm = await page.locator('#upload-form');
    await expect(uploadForm).toBeVisible();

    const myImage = await page.locator('#my-image');
    await expect(myImage).toBeVisible();

    await uploadForm.fill({ title: 'New Task', description: 'Task description' });
    await uploadForm.locator('button[type="submit"]').click();

    await expect(page.locator('.notification')).toHaveText(
      '작성 요청이 성공적으로 전송되었습니다.',
    );
  });

  test('TT-6. 현재 작업 기록에서 스크럼을 클릭하면 작업기록으로 이동한다', async () => {
    const scrumButton = await page.locator('.scrum-button');
    await scrumButton.click();
    await expect(page).toHaveURL(/.*\/work-log/);
  });

  test('TT-7. 팀 질문요소 요약에서 더보기를 클릭하면 질문요청 페이지로 이동한다', async () => {
    const moreButton = await page.locator('.more-button');
    await moreButton.click();
    await expect(page).toHaveURL(/.*\/question-request/);
  });
});
