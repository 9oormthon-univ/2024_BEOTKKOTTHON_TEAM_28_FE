import { Flex, Spacer } from '@chakra-ui/react';

const Header = () => {
  return (
    <header>
      <Flex>
        <a style={{ marginRight: '10px' }}>로고</a>
        <a style={{ marginRight: '10px' }}>스타트업밸리</a>
        <Spacer />
        <nav>
          <a href='/home' style={{ marginRight: '10px' }}>
            팀 작업 기록
          </a>
          <a href='/question-list' style={{ marginRight: '10px' }}>
            질문 목록
          </a>
          <a href='/task-history' style={{ marginRight: '10px' }}>
            작업 기록
          </a>
          <a href='/dashboard' style={{ marginRight: '10px' }}>
            나의 대시보드
          </a>
          <a href='/mypage' style={{ marginRight: '10px' }}>
            마이페이지
          </a>
        </nav>
      </Flex>
    </header>
  );
};

export default Header;
