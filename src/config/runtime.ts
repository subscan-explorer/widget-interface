import { type SunmaoUIRuntimeProps } from '@sunmao-ui-fork/runtime';
import { Font, Table, Pagination, Title, Icon, CardSummary, ConstraintList, Tabs } from 'injectComp';

const libs = [{
  components: [Font, Table, Pagination, Title, Icon, CardSummary, ConstraintList, Tabs],
}];

export default {
  libs,
} as SunmaoUIRuntimeProps;
