import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Splash from '../Splash';

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
