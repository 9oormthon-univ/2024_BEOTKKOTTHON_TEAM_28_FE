import { Box, Flex, Link } from '@chakra-ui/react';

import PropTypes from 'prop-types';
import { getProjectList } from '../../../api/common';
import { useEffect } from 'react';
import { useState } from 'react';

const ProjectListModal = ({ isTaskHistory }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjectList = async () => {
      const projectListData = await getProjectList();
      setProjects(projectListData.progressingProjectList);
    };

    fetchProjectList();
  }, []);

  return (
    <Flex
      position='fixed'
      direction='column'
      zIndex='997'
      top='59px'
      right={isTaskHistory ? '300px' : '550px'}
      width='300px'
      background='white'
      padding='12px'
      gap='8px'
      boxShadow='0px 4px 16px 0px rgba(0, 0, 0, 0.25), 0px 0px 32px 0px rgba(0, 0, 0, 0.04)'
    >
      {projects?.map((project) => (
        <Link
          key={project.name}
          href={isTaskHistory ? `/${project.id}/task-history` : `/${project.id}/team-task-history`}
        >
          <Flex gap='6px' alignItems='center'>
            <img
              src={project.image ?? '/tomato.png'}
              alt={project.name}
              width='40px'
              height='40px'
            />
            <Box className='Body-md'>{project.name}</Box>
          </Flex>
        </Link>
      ))}
      {(!projects || projects?.length === 0) && (
        <Box className='Body-md'>연결된 프로젝트가 없어요!</Box>
      )}
    </Flex>
  );
};

ProjectListModal.propTypes = {
  isTaskHistory: PropTypes.bool,
};

export default ProjectListModal;
