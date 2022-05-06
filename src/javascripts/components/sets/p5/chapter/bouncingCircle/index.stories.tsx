import { ComponentMeta } from '@storybook/react';
import React from 'react';

import BouncingCircle from './index';

export default {
  component: BouncingCircle,
  title: 'BouncingCircle',
  decorators: [(story) => <>{story()}</>],
} as ComponentMeta<typeof BouncingCircle>;

function Template(args) {
  return <BouncingCircle {...args} />;
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
