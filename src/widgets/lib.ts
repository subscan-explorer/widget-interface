import { RegistryInterface, SunmaoLib } from '@subscan/widget-runtime';
import {
  Table,
  Pagination,
  Title,
  Icon,
  CardSummary,
  ConstraintList,
  Tabs,
  TimeLine,
  ChartLine,
  ChartPie,
  NftAlbum,
} from './components';
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
  ChartPie,
  ChartLine,
  NftAlbum,
];
export const traits = Traits;
export const modules = [];
export function install(registry: RegistryInterface) {
  components.forEach(c => registry.registerComponent(c));
  traits.forEach(t => registry.registerTrait(t));
  modules.forEach(m => registry.registerModule(m));
}
export const SubscanLib: SunmaoLib = {
  components,
  traits,
  modules,
};
