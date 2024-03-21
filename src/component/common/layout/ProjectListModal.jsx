import { Flex, Link } from '@chakra-ui/react';

import PropTypes from 'prop-types';
import { getProjectList } from '../../../api/common';
import { useEffect } from 'react';
import { useState } from 'react';

const ProjectListModal = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjectList = async () => {
      const projectListData = await getProjectList();
      setProjects(projectListData);
    };

    fetchProjectList();
  }, []);

  return (
    <Flex
      position='fixed'
      zIndex='997'
      top='59px'
      right='550px'
      width='150px'
      minHeight='100px'
      background='pink'
    >
      {projects.map((project) => (
        <Link key={project.name} href={`/${project.id}/team-task-history`}>
          {project.name}
        </Link>
      ))}
    </Flex>
  );
};

ProjectListModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProjectListModal;
