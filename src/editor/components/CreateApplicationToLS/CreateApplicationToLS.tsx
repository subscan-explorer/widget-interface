import React, { useCallback, useMemo, useState, ChangeEvent, useEffect } from 'react';
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
  Flex
} from '@chakra-ui/react';
import { DEFAULT_APP_TEMPLATE } from 'config/constants';
import { ImportWidgetIcon } from 'components/Svg';
import { LocalStorageManager } from '../../api/localstorage/LocalStorageManager';
import { ColorButton } from '../ColorButton';
import { Application } from '@subscan/widget-core';


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

  const [widgetCode, setWidgetCode] = useState('');
  const [isByImport, setIsByImport] = useState(false);

  const nameOnChangeHandler = useCallback((event) => {
    SetName(event.target.value);
  }, []);

  const createApplication = useCallback(async () => {
    lsManager.newWidgetInLs({ name }, widgetCode ? JSON.parse(widgetCode) as Application : undefined);
    onCreated && onCreated();
    onClose();
  }, [lsManager, name, widgetCode, onCreated, onClose]);

  const importWidget = useCallback(() => {
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = false;
    input.accept = "application/json";
    input.onchange = async (e) => {
      try {
        const files = (e as unknown as ChangeEvent<HTMLInputElement>).target.files;
        if (files?.length) {
          setWidgetCode(await (files[0].text()));
          setIsByImport(true);
        }
      } catch (err) {
        console.error(err);
      }
    };
    input.click();
  }, []);

  useEffect(() => {
    if (isOpen) {
      setWidgetCode('');
      setIsByImport(false);
    }
  }, [isOpen]);

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
            <Flex marginBottom={'2'}>
              <FormLabel marginBottom={0} marginRight={"1.5"}>Code</FormLabel>
              <ImportWidgetIcon pointer onClick={importWidget} />
            </Flex>
            <Textarea disabled={isByImport} placeholder={JSON.stringify(DEFAULT_APP_TEMPLATE)} value={widgetCode} onChange={(e) => setWidgetCode(e.target.value)} />
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
