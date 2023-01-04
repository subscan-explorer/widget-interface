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
} from '@chakra-ui/react';
import { LocalStorageManager, WidgetItem } from '../../api/localstorage/LocalStorageManager';
import { ColorButton } from '../ColorButton';


interface Props extends BareProps {
  widget: WidgetItem;
  onUpdated?: () => void
  isOpen: boolean
  onClose(): void
}

const CreateApplication: React.FC<Props> = ({ widget, onUpdated, isOpen, onClose }) => {
  const lsManager = useMemo(() => new LocalStorageManager(), []);
  const [name, SetName] = useState<string>(widget.name);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const nameOnChangeHandler = useCallback((event) => {
    SetName(event.target.value);
  }, []);

  const updateApplication = useCallback(async () => {
    lsManager.updateWidgetNameInLs(widget.id, name);
    onUpdated && onUpdated();
    onClose();
  }, [lsManager, widget.id, name, onUpdated, onClose]);

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update your widget</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input ref={initialRef} value={name} onChange={nameOnChangeHandler} placeholder='Widget Name' />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <ColorButton mr={3} onClick={updateApplication}>
            Update
          </ColorButton>
          <ColorButton onClick={onClose}>Cancel</ColorButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateApplication;
