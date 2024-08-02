import { Flex } from '@chakra-ui/react';
import NonData from '../../../components/molecules/NonData';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';
import { getProjectList } from '../../../api/dashboard';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import useUserStore from '../../../stores/userStore';

const GardenList = ({ sort, memberId }) => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const { userId } = useUserStore();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProjectList(memberId ?? id ?? userId, sort);
      setData(response);
    };

    if (id || userId) {
      fetchData();
    }
  }, [id, userId, memberId, sort]);

  /*
  const updateProjects = (index, newIsPublic) => {
    setData((prevData) =>
      prevData.map((el, i) => (i === index ? { ...el, isPublic: !newIsPublic } : el)),
    );
  };
*/

  return (
    <Flex direction='column' gap='40px'>
      {data?.map((el, index) => (
        <ProjectItem
          key={index}
          memberId={el.memberId}
          teamId={el.id}
          name={el.name}
          summary={el.summary}
          profileImage={el.profileImage}
          startAt={el.startAt}
          endAt={el.endAt}
          status={el.status}
          isPublic={el.isPublic}
        />
      ))}
      {(!data || data?.length === 0) &&
        (sort === 'all' ? (
          <NonData extraText='서버에 디스코드 봇을 추가하여 팀원들과 소통해보세요!' />
        ) : (
          <NonData />
        ))}
    </Flex>
  );
};

GardenList.propTypes = {
  sort: PropTypes.string,
  memberId: PropTypes.number,
};

export default GardenList;
