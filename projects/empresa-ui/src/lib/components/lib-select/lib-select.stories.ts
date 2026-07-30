import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';

import { LibSelect } from './lib-select';

import {provideEmpresaUI} from './../../providers/provide-empresa-ui';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const meta: Meta<LibSelect> = {
  title: 'Components/LibSelect',
  component: LibSelect,
  decorators: [
    (story, context) => applicationConfig({
      providers: [
        provideAnimationsAsync(),
        provideEmpresaUI({
          theme: context.globals['theme']
        })
      ]
    })(story, context)
  ]
};

export default meta;

type Story = StoryObj<LibSelect>;

export const Primary: Story = {
  args: {
    options: [
  { name: 'Lima', code: 'PE' },
  { name: 'Bogotá', code: 'CO' },
  { name: 'Madrid', code: 'ES' }
],
    optionLabel: 'name',
    placeholder: 'Selecciona el pais',
  }
};