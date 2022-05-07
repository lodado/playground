import { ComponentMeta } from '@storybook/react';
import React from 'react';

import Oscillation from './index';

export default {
  component: Oscillation,
  title: 'Oscillation',
  decorators: [(story) => <>{story()}</>],
} as ComponentMeta<typeof Oscillation>;

function Template(args) {
  return <Oscillation {...args} />;
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
