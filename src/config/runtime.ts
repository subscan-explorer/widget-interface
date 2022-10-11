import { type SunmaoUIRuntimeProps } from "@sunmao-ui-fork/runtime";
import {
  Table,
  Pagination,
  Title,
  Icon,
  CardSummary,
  ConstraintList,
  Tabs,
  TimeLine,
  Chart,
} from "injectComp";

const libs = [
  {
    components: [
      Table,
      Pagination,
      Title,
      Icon,
      CardSummary,
      ConstraintList,
      Tabs,
      TimeLine,
      Chart,
    ],
  },
];

export default {
  libs,
} as SunmaoUIRuntimeProps;
