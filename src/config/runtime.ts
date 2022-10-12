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
} from "sunmao/components";

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
