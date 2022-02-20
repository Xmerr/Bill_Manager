import React from 'react';
import { CycleDetails } from '../';

export default {
    title: 'Templates/CycleDetails',
    component: CycleDetails,
    args: {
        date: '2022 - 18 - 02',
        subtitle: 'This is a splash screen that introduces the user to the app',
    },
};

const Template = args => <CycleDetails {...args} />;

export const Default = Template.bind({});
