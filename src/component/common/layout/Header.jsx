import { Flex, Link } from '@chakra-ui/react';

const Header = () => {
  return (
    <header>
      <Flex alignItems="center" p="4" bg="#F0F2F4">
        <Link href="/" mr="4">
          로고
        </Link>
        <Link href="/" mr="4">
          스타트업밸리
        </Link>
        <Flex as="nav" gap="20px">
          <Link href="/home">
            팀 작업 기록
          </Link>
          <Link href="/question-list">
            질문 목록
          </Link>
          <Link href="/task-history">
            작업 기록
          </Link>
          <Link href="/dashboard">
            나의 대시보드
          </Link>
          <Link href="/mypage">
            마이페이지
          </Link>
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
