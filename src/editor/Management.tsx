import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { BareProps } from 'types';
import { Link } from "react-router-dom";
import { cx } from '@emotion/css';
import {
  HStack,
  VStack,
  Divider,
  useDisclosure
} from '@chakra-ui/react';
import { CreateApplicationToLS, ColorButton, UpdateApplicationToLS } from './components';
import { AddWidgetIcon, CopyWidgetIcon, DeleteWidgetIcon, EditWidgetIcon, ShareWidgetIcon } from 'components/Svg';
import { ROUTER_BASE_URL } from './router';
import { StyledFont14, StyledFont16, StyledModuleBox } from 'ui/common';
import { LocalStorageManager, WidgetItem } from './api/localstorage/LocalStorageManager';

export interface Props extends BareProps {
  number?: string;
}

interface WidgetCardProps {
  widget: WidgetItem
  lsManager: LocalStorageManager;
  callback?: () => void;
}

const StyledRecord = styled.div`
  align-items: center;
  padding: 20px 40px;
`;

const StyledCard = styled(StyledModuleBox)`
  height: 183px;
  width: 240px;
  padding: 20px;
`;

const WidgetCard: React.FC<WidgetCardProps> = ({ widget, lsManager, callback }) => {
  const { isOpen, onOpen: onOpenUpdateWidget, onClose } = useDisclosure();

  const onDeleteWidget = useCallback(() => {
    lsManager.deleteWidget(widget.id);
    callback && callback();
  }, [callback, lsManager, widget.id]);

  const onDuplicateWidgetInLs = useCallback(() => {
    lsManager.duplicateWidgetInLs(widget.id);
    callback && callback();
  }, [callback, lsManager, widget.id]);

  return (<StyledCard key={widget.id} mr="20px">
    <StyledFont14 block bold>{widget.name}</StyledFont14>
    <Divider my="10px" />
    <StyledFont14 block>{dayjs.unix(widget.updated_at).fromNow(true)}</StyledFont14>
    <HStack spacing="2" mt="10px">
      <CopyWidgetIcon width="15px" pointer onClick={onDuplicateWidgetInLs} />
      <EditWidgetIcon width="15px" pointer onClick={onOpenUpdateWidget} />
      <DeleteWidgetIcon width="15px" pointer onClick={onDeleteWidget} />
    </HStack>
    <Divider my="10px" />
    <Link to={`${ROUTER_BASE_URL}/editor/${widget.id}`}>
      <ColorButton>
        Editor
      </ColorButton>
    </Link>
    <UpdateApplicationToLS widget={widget} onUpdated={callback} isOpen={isOpen} onClose={onClose} />
  </StyledCard>);
};

const Record: React.FC<Props> = ({ className }) => {
  const lsManager = useMemo(() => new LocalStorageManager(), []);
  const [freshKey, setFreshKey] = useState<number>(0);
  // const [currentWidget, SetCurrentWidget] = useState<WidgetItem | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const freshData = useCallback(() => { setFreshKey(freshKey + 1); }, [freshKey]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const widgetsFromLS = useMemo(() => lsManager.getWidgetsFromLS(), [lsManager, freshKey]);

  return (<StyledRecord className={cx(className, 'chakraCSSReset')}>
    <VStack
      spacing={3}
      align='stretch'
    >
      <StyledFont16 bold block>Widget Management</StyledFont16>
      <StyledModuleBox p="20px" display="flex" spacing="5" flexWrap="wrap">
        <StyledCard mr="20px" display="flex" flexDirection="column" alignItems="center" justifyContent="space-evenly" onClick={onOpen}>
          <AddWidgetIcon width="64" />
          <ColorButton>
            Create Widget
          </ColorButton>
        </StyledCard>

        {widgetsFromLS.map((widget) => {
          return <WidgetCard key={widget.id} widget={widget} lsManager={lsManager} callback={freshData} />;
        })}
      </StyledModuleBox>
      <CreateApplicationToLS onCreated={freshData} isOpen={isOpen} onClose={onClose} />
    </VStack>
  </StyledRecord>);
};

export default Record;
