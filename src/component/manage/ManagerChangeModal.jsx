import {
  Button,
  Flex,
  Grid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import { ProfileEditModalUserItem } from '../mypage';
import PropTypes from 'prop-types';
import getTeamLeader from '../../api/manage/getTeamLeader';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import useUserStore from '../../stores/userStore';

const ManagerChangeModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState();
  const [leader, setLeader] = useState();
  const { id } = useParams();
  const { userName } = useUserStore();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTeamLeader(id);
      setData(response);
      setLeader(response.filter((el) => el.isLeader === true));
    };

    fetchData();
  }, [id]);

  if (!leader || leader[0]?.nickname !== userName) return null;

  return (
    <>
      <Button variant='grayWhite' w='100%' onClick={onOpen}>
        권한 변경하기
      </Button>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius='16px' minWidth='fit-content' marginTop='250px'>
          <ModalCloseButton />
          <ModalBody position='relative'>
            <Flex direction='column' width={700}>
              <Flex
                top='0'
                right='0'
                left='0'
                position='absolute'
                justifyContent='space-between'
                borderTopRadius='16px'
                background='#F0F2F4'
                paddingX='40px'
                paddingY='32px'
              >
                <label className='Display-sm'>권한 수정</label>
              </Flex>
              <Grid
                templateColumns='repeat(4, 1fr)'
                gap='25px'
                marginTop='120px'
                paddingBottom='30px'
              >
                {data?.map((el) => (
                  <ProfileEditModalUserItem
                    id={el.memberId}
                    key={el.id}
                    memberId={el.memberId}
                    nickname={el.nickname}
                    profileImage={el.profileImage}
                    isLeader={el.isLeader}
                  />
                ))}
              </Grid>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

ManagerChangeModal.propTypes = {
  data: PropTypes.object,
};

export default ManagerChangeModal;
