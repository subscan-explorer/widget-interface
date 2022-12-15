import React, { useCallback, useMemo, useState } from 'react';
import { BareProps } from 'types';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { DEFAULT_APP_TEMPLATE } from 'config/constants';
import { LocalStorageManager } from '../../api/localstorage/LocalStorageManager';
import { ColorButton } from '../ColorButton';


interface Props extends BareProps {
  onCreated?: () => void
  isOpen: boolean
  onClose(): void
}

const CreateApplication: React.FC<Props> = ({ onCreated, isOpen, onClose }) => {
  const lsManager = useMemo(() => new LocalStorageManager(), []);

  const [name, SetName] = useState<string>('');
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const nameOnChangeHandler = useCallback((event) => {
    SetName(event.target.value);
  }, []);

  const createApplication = useCallback(async () => {
    lsManager.newWidgetInLs({ name });
    onCreated && onCreated();
    onClose();
  }, [lsManager, name, onCreated, onClose]);

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create your widget</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input ref={initialRef} value={name} onChange={nameOnChangeHandler} placeholder='Widget Name' />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Code</FormLabel>
            <Textarea disabled placeholder={JSON.stringify(DEFAULT_APP_TEMPLATE)} />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <ColorButton mr={3} onClick={createApplication}>
            Create
          </ColorButton>
          <ColorButton onClick={onClose}>Cancel</ColorButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateApplication;
