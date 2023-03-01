import React, { useCallback, useState } from 'react';
import { BareProps } from 'types';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Textarea,
} from '@chakra-ui/react';
import { DEFAULT_APP_TEMPLATE } from 'config/constants';
import { useSaveAppConfigs } from '../../api/subscan/Services';

export interface Props extends BareProps {
  onCreated?: () => void;
}

const CreateApplication: React.FC<Props> = ({ onCreated }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, SetName] = useState<string>('');
  const [networkId, SetNetworkId] = useState<string>('');
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { action, loading } = useSaveAppConfigs();

  const nameOnChangeHandler = useCallback(event => {
    SetName(event.target.value);
  }, []);

  const networkIdOnChangeHandler = useCallback(event => {
    SetNetworkId(event.target.value);
  }, []);

  const createApplication = useCallback(async () => {
    await action({
      name: name,
      payload: JSON.stringify(DEFAULT_APP_TEMPLATE),
      networks: JSON.parse(networkId),
    });
    onCreated && onCreated();
    onClose();
  }, [action, name, networkId, onCreated, onClose]);

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal" size="sm">
        Create Empty Application
      </Button>

      <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your application</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input ref={initialRef} value={name} onChange={nameOnChangeHandler} placeholder="Application Name" />
            </FormControl>

            <FormControl>
              <FormLabel>Network ID</FormLabel>
              <Input value={networkId} onChange={networkIdOnChangeHandler} placeholder="[1,2,3,4]" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Code</FormLabel>
              <Textarea disabled placeholder={JSON.stringify(DEFAULT_APP_TEMPLATE)} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button isLoading={loading} colorScheme="teal" mr={3} onClick={createApplication}>
              Create
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateApplication;
