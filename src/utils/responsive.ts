import defaultThemeLtr, { Breakpoint } from 'settings/themes';
import { css, CSSRules } from 'styled-components';
import toTitle from './general';

export type MediaQueryBoundary = 'up' | 'down' | 'only';
export type MediaQueryHelper = {
  [x: string]: (strs: string[], ...interpolations: CSSRules) => CSSRules;
};

const screens = Object.keys(defaultThemeLtr.breakpoints);

const boundaryToWidth = (boundary: MediaQueryBoundary) => {
  let result = '';
  switch (boundary) {
    case 'up':
      result = 'min-width';
      break;
    case 'down':
      result = 'max-width';
      break;
    default:
      result = 'width';
  }
  return result;
};

export const mediaQueryTemplate = (boundary: MediaQueryBoundary, breakpointSize: number) => (
  strs: string[],
  ...interpolations: CSSRules
) => css`
  @media screen and (${boundaryToWidth(boundary)}: ${breakpointSize}px) {
    ${css(strs, ...interpolations)}
  };
`;

export const up = (breakpointSize: number) => mediaQueryTemplate('up', breakpointSize);
export const down = (breakpointSize: number) => mediaQueryTemplate('down', breakpointSize);

const media = ((): MediaQueryHelper => {
  const composeName = (main: Breakpoint, suffix: MediaQueryBoundary | ''): string =>
    `for${toTitle(main)}${toTitle(suffix)}`;

  const obj: MediaQueryHelper = {};
  screens.forEach((screen: Breakpoint, index: number, breakpoints: Breakpoint[]) => {
    const first = 0;
    const last = breakpoints.length - 1;
    // omit `phone` breakpoint as `forPhoneUp` means ALL and `forPhoneDown` name doesn't make sense
    // omit `bigDesktop` breakpoint because `forBigDesktopUp` name doesn't make sense and
    // `forBigDesktopDown` means ALL
    if (index > first && index < last) {
      // add for...up helper
      obj[composeName(screen, 'up')] = up(defaultThemeLtr.breakpoints[breakpoints[index]]);
      // add for...down helper
      obj[composeName(screen, 'down')] = down(
        defaultThemeLtr.breakpoints[breakpoints[index + 1]] - 1,
      );
    } else if (index === first) {
      // forPhone - everything less than TabletPortrait breakpoint
      obj[composeName(screen, '')] = down(defaultThemeLtr.breakpoints[breakpoints[index + 1]] - 1);
    } else if (index === last) {
      // forBigDesktop - everything bigger than BigDesktop breakpoint
      obj[composeName(screen, '')] = up(defaultThemeLtr.breakpoints[breakpoints[index]]);
    }
  });
  return obj;
})();

export default media;
