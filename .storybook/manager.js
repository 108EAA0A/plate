import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',
  brandTitle: 'Slate Plugins',
  brandUrl: 'https://github.com/zbeyens/slate-plugins-next'
});

addons.setConfig({
  theme,
  panelPosition: 'right',
});
