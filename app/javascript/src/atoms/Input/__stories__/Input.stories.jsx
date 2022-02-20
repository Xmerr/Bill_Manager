import React from 'react';
import { Input } from '../';
import { colors, inputTypes, inputVariants } from '@helpers/enums';

export default {
    title: 'Atoms/Input',
    component: Input,
    args: {
        value: 'Hello World',
        type: 'text',
        color: 'primary',
        variant: 'outlined',
        size: 'medium',
        autoFocus: false,
    },
    argTypes: {
        color: {
            description:
                'Color and mood of the button, options are set by the mui theme but the list can be easily found here',
            options: colors,
            table: {
                defaultValues: { summary: 'primary' },
            },
        },
        autoFocus: {
            description: 'If true, the input element is focused during the first mount',
        },
        size: {
            description: 'How large the input field should be',
        },
        type: {
            options: inputTypes,
        },
        variant: {
            description: 'Style of the input',
            options: inputVariants,
        },
        onChange: {
            action: 'onChange',
        },
    },
};

const Template = args => <Input {...args} />;

export const Default = Template.bind({});
