import { ComponentMeta } from '@storybook/react';
import React from 'react';

import { ExampleComponent as StoryComponent } from './index';

export default {
  component: StoryComponent,
  title: 'Toast',
  decorators: [(story) => <>{story()}</>],
} as ComponentMeta<typeof StoryComponent>;

const Template = function (args) {
  return <StoryComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  text: 'example text',
  translateX: 10,
  animationTime: 170,
  onClick: () => console.log('click'),
};

export const Moved = Template.bind({});
Moved.args = {
  ...Default.args,
  locate: {
    bottom: 30,
    left: 30,
  },
};
