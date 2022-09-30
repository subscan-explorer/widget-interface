import { type SunmaoUIRuntimeProps } from '@sunmao-ui-fork/runtime';
import { Font, Table, Pagination, Title, Icon, CardSummary, ConstraintList } from 'injectComp';

const libs = [{
  components: [Font, Table, Pagination, Title, Icon, CardSummary, ConstraintList],
}];

export default {
  libs,
} as SunmaoUIRuntimeProps;
