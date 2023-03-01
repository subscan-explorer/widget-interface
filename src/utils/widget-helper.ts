// move to @subscan/widget-runtime in the future?

import { ComponentMetadata } from '@subscan/widget-core/lib/metadata';
import { ComponentImplProps } from '@subscan/widget-runtime';
import { TLiteral, Type } from '@sinclair/typebox';
import { SlotSpec } from '@subscan/widget-core';

export type IntoStringUnion<T> = {
  [K in keyof T]: T[K] extends string ? TLiteral<T[K]> : never;
};

export function StringUnion<T extends string[] | number[]>(values: [...T], options?: any) {
  return Type.KeyOf(
    Type.Object(
      values.reduce((prev, cur) => {
        prev[cur] = Type.Boolean();
        return prev;
      }, {} as Record<T[number], any>)
    ),
    options
  );
}

export const FALLBACK_METADATA: ComponentMetadata = {
  name: '',
  description: '',
  displayName: '',
  exampleProperties: {},
};

export const getComponentProps = <
  T extends Record<string, unknown>,
  TState,
  TMethods,
  TSlots extends Record<string, SlotSpec>,
  KStyleSlots extends ReadonlyArray<string>,
  KEvents extends ReadonlyArray<string>
>(
  props: T & ComponentImplProps<T, TState, TMethods, TSlots, KStyleSlots, KEvents>
) => {
  const {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    component,
    slotsElements,
    childrenMap,
    services,
    app,
    customStyle,
    callbackMap,
    mergeState,
    subscribeMethods,
    getElement,
    elementRef,
    hooks,
    isInModule,
    isInEditor,
    componentDidMount,
    componentDidUnmount,
    componentDidUpdate,
    /* eslint-enable @typescript-eslint/no-unused-vars */
    ...rest
  } = props;
  return rest;
};
