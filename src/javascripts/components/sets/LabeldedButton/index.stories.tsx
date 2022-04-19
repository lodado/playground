import { ComponentMeta } from '@storybook/react';
import React from 'react';

import LabeledButton from './index';

export default {
  component: LabeledButton,
  title: 'LabeledButton',
  decorators: [(story) => <>{story()}</>],
} as ComponentMeta<typeof LabeledButton>;

const Template = (args) => <LabeledButton {...args} />;

export const Default = Template.bind({});
Default.args = { text: 'text', backgroundColor: 'black', color: 'white' };

export const Pinned = Template.bind({});
Pinned.args = {
  ...Default.args,
};

export const Archived = Template.bind({});
Archived.args = {
  ...Default.args,
};
