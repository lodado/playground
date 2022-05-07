import { ComponentMeta } from '@storybook/react';
import React from 'react';

import AngleLine from './index';

export default {
  component: AngleLine,
  title: 'AngleLine',
  decorators: [(story) => <>{story()}</>],
} as ComponentMeta<typeof AngleLine>;

function Template(args) {
  return <AngleLine {...args} />;
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
