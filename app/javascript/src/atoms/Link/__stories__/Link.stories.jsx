import React from 'react';
import { Link } from '../';

export default {
    title: 'Atoms/Link',
    component: Link,
    args: {
        children: 'Link',
        to: '/',
    },
    argTypes: {
        children: {
            description:
                'The content of the button, expected to be a string but could be another node',
        },
        to: {
            description: 'URL to navigate the user to on click',
        },
    },
};

const Template = args => <Link {...args} />;

export const Default = Template.bind({});
