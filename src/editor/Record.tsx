import React, { useCallback } from 'react';
import styled from 'styled-components';
import { BareProps } from 'types';
import { useDeleteAppConfigs, useFetchAppConfigs } from './services';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  Button,
  Container,
  VStack,
  StackDivider
} from '@chakra-ui/react';
import { parseTimeToUtc } from 'utils';
import { Link } from "react-router-dom";
import { cx } from '@emotion/css';
import { CreateApplication } from './components';

export interface Props extends BareProps {
  number?: string;
}

const StyledRecord = styled(Container)`
  align-items: center;
`;

const Record: React.FC<Props> = ({ className }) => {
  const { data, refetch } = useFetchAppConfigs();
  const { del } = useDeleteAppConfigs();

  const deleteApplicationHandler = useCallback(async (appId) => {
    await del([appId]);
  }, [del]);

  return (<StyledRecord className={cx(className, 'chakraCSSReset')}>
    <VStack
      divider={<StackDivider borderColor='gray.200' />}
      spacing={3}
      align='stretch'
    >
      <Heading as='h3' size='lg' textAlign="center">
        My Lowcode Record
      </Heading>
      <TableContainer>
        <Table size='sm'>
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Updated At</Th>
              <Th />
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((config, index) => {
              return (<Tr key={config.id}>
                <Td>#{index + 1}</Td>
                <Td>{config.id}</Td>
                <Td>{config.name}</Td>
                <Td>{parseTimeToUtc(config.updated_at, '', false)}</Td>
                <Td>
                  <Link to={`/editor/${config.id}`}>
                    <Button colorScheme='teal' size='xs'>
                      Edit
                    </Button>
                  </Link>

                  <Button ml="1" colorScheme='teal' size='xs' onClick={async () => { await deleteApplicationHandler(config.id); refetch(); }}>
                    Del
                  </Button>
                </Td>
              </Tr>);
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <CreateApplication onCreated={refetch} />
    </VStack>
  </StyledRecord>);
};

export default Record;
