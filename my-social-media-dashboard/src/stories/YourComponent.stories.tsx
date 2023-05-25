import React from 'react';
import { Meta, Story } from '@storybook/react';
import YourComponent from '../components/YourComponent';

export default {
title: 'Components/YourComponent',
component: YourComponent,
} as Meta;

export const Default: Story = () => <YourComponent />;
