import React from 'react';
import { Navbar } from '../';

export default {
    title: 'Molecules/Navbar',
    component: Navbar,
};

const Template = args => <Navbar {...args} />;

export const Default = Template.bind({});
