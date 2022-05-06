import { ComponentMeta } from '@storybook/react';
import React from 'react';

import FlockingCanvas from './index';

export default {
  component: FlockingCanvas,
  title: 'FlockingCanvas',
  decorators: [(story) => <>{story()}</>],
} as ComponentMeta<typeof FlockingCanvas>;

function Template(args) {
  return <FlockingCanvas {...args} />;
}

export const Default = Template.bind({});
Default.args = {};

export const Pinned = Template.bind({});
Pinned.args = {
  ...Default.args,
};

export const Archived = Template.bind({});
Archived.args = {
  ...Default.args,
};
