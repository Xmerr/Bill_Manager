import React from 'react';
import { Button } from '../';
import { colors, buttonVariants } from '../../../helpers/enums';

export default {
    title: 'Atoms/Buttons',
    component: Button,
    args: {
        children: 'Button',
        color: 'primary',
        variant: 'contained',
    },
    argTypes: {
        children: {
            description:
                'The content of the button, expected to be a string but could be another node',
        },
        color: {
            description:
                'Color and mood of the button, options are set by the mui theme but the list can be easily found here',
            options: colors,
            table: {
                defaultValues: { summary: 'primary' },
            },
        },
        variant: {
            description: 'Type of button',
            options: buttonVariants,
            table: {
                defaultValues: { summary: 'contained' },
            },
        },
        onClick: {
            description: 'What happens when the button is clicked',
            action: 'Clicked',
        },
    },
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
