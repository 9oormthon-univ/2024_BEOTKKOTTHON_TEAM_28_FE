import { useParams } from 'react-router-dom';

const ManagePage = () => {
  const { id } = useParams();
  return <main>{id}팀 관리자모드</main>;
};

export default ManagePage;
