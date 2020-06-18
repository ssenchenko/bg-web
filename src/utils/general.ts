import { FunctionComponent, ComponentProps } from "react";

/**
 * Make string a title by upper-casing the first symbol.
 *
 * @param str - string
 */
export function toTitle(str?: string | null): string | null | undefined {
  return str && str[0].toUpperCase() + str.slice(1);
}

// https://github.com/microsoft/TypeScript/issues/27425#issuecomment-473848082
export type FCWithDefaultProps<
  T extends FunctionComponent<any>,
  D extends Partial<ComponentProps<T>>
> = Pick<T, Exclude<keyof T, "defaultProps">> & // remove defaultProps
  (T extends (...a: infer A) => infer R ? (...a: A) => R : never) & /*keep signature*/ {
    defaultProps: D;
  }; //new defaults
