import { ButtonComponent } from "./button.component";
import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta<ButtonComponent> = {
  title: 'Example/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  render: (args: ButtonComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes:{
    onClick: { action: 'clicked' }
  }
};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {};


