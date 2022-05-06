import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Vector from '../../vectors/vector';

import ForceCircle from './index';

export default {
  component: ForceCircle,
  title: 'forceCircle',
  decorators: [(story) => <>{story()}</>],
} as ComponentMeta<typeof ForceCircle>;

function Template(args) {
  return <ForceCircle vector={new Vector({ x: 150, y: 150 })} />;
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
