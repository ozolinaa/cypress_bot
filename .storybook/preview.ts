import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import CenteringDecorator from './decorators/centeringStylesDecorator'
import GlobalStylesDecorator from './decorators/globalStylesDecorator';
import ControlFromUrlDecorator from './decorators/controlFromUrlDecorator';
import { ViewportMap } from '@storybook/addon-viewport/dist/ts3.9/models';

const viewports: ViewportMap = {
  Tablet: {
    name: 'Zebra ET51', //https://www.zebra.com/content/dam/zebra_new_ia/en-us/solutions-verticals/product/Tablets/et51-et56-tablet/is/spec-sheet/et51-android-spec-sheet-integrated-scanner-en-us.pdf
    styles: {
      width: '1280px', // phisical 2560px - redered as 1280px (due to scaling) (value from emulator that has correct screen settigs)
      height: '728px', // phisical 1600px - redered as 728px (due to scaling) (value from emulator that has correct screen settigs)
    },
    type: 'tablet'
  },
  ...MINIMAL_VIEWPORTS
};

export const decorators = [GlobalStylesDecorator, CenteringDecorator, ControlFromUrlDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports
  },
}