import React from 'react';
import styled from 'styled-components';
import { ComponentMeta } from '@storybook/react';

import StoryComponent from './index';

export default {
  component: StoryComponent,
  title: 'Carousel',
  decorators: [(story) => <>{story()}</>],
} as ComponentMeta<typeof StoryComponent>;

const Template = function (args) {
  return <StoryComponent {...args} />;
};

export const Default = Template.bind({});

Default.args = {};

export const Pinned = Template.bind({});

Pinned.args = {
  ...Default.args,
};
