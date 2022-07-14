import { ComponentMeta } from '@storybook/react';
import React from 'react';

import StoryComponent from './index';

export default {
  component: StoryComponent,
  title: 'Transition',
  decorators: [(story) => <>{story()}</>],
} as ComponentMeta<typeof StoryComponent>;

const Template = function (args) {
  return <StoryComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: <div>12342</div>,
  translateY: 25,
  delayTime: 0,
};
