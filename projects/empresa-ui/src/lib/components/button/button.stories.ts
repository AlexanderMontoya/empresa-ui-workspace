import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';

import { Button } from './button';

import {provideEmpresaUI} from './../../providers/provide-empresa-ui';

const meta: Meta<Button> = {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (story, context) => applicationConfig({
      providers: [
        provideEmpresaUI({
          theme: context.globals['theme']
        })
      ]
    })(story, context)
  ]
};

export default meta;

type Story = StoryObj<Button>;

export const Primary: Story = {
  args: {
    label: 'Guardar'
  }
};

export const Delete: Story = {
  args: {
    label: 'Eliminar'
  }
};