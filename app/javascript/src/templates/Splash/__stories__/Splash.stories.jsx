import React from 'react';
import { Splash } from '../';

export default {
    title: 'Templates/Splash',
    component: Splash,
    args: {
        title: 'Splash Screen',
        subtitle: 'This is a splash screen that introduces the user to the app',
    },
};

const Template = args => <Splash {...args} />;

export const Default = Template.bind({});
