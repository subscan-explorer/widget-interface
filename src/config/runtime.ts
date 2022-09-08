import { type SunmaoUIRuntimeProps } from '@sunmao-ui/runtime';
import { Font, Table, Pagination } from 'injectComp';

const libs = [{
  components: [Font, Table, Pagination],
}];

export default {
  libs,
} as SunmaoUIRuntimeProps;
