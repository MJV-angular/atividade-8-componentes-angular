import { HomeMainComponent } from './home-main.component';
import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta<HomeMainComponent> = {
  title: 'Example/Home',
  component: HomeMainComponent,
  tags: ['autodocs'],
  render: (args: HomeMainComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
};

export default meta;

type Story = StoryObj<HomeMainComponent>;

export const Primary: Story = {};


