import { RegistryInterface } from "@sunmao-ui-fork/runtime";
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
} from "./components";

import Traits from './traits';

export const components = [
  Table,
  Pagination,
  Title,
  Icon,
  CardSummary,
  ConstraintList,
  Tabs,
  TimeLine,
  Chart,
];

export const traits = Traits;
export const modules = [];

export function install (registry: RegistryInterface) {
  components.forEach(c => registry.registerComponent(c));
  traits.forEach(t => registry.registerTrait(t));
  modules.forEach(m => registry.registerModule(m));
}