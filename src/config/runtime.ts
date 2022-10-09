import { type SunmaoUIRuntimeProps } from "@sunmao-ui-fork/runtime";
import {
  Font,
  Table,
  Pagination,
  Title,
  Icon,
  CardSummary,
  ConstraintList,
  Tabs,
  TimeLine,
} from "injectComp";

const libs = [
  {
    components: [
      Font,
      Table,
      Pagination,
      Title,
      Icon,
      CardSummary,
      ConstraintList,
      Tabs,
      TimeLine,
    ],
  },
];

export default {
  libs,
} as SunmaoUIRuntimeProps;
