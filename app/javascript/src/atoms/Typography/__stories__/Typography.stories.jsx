import React from 'react';
import { Typography } from '../';
import { alignments, textVariants } from '../../../helpers/enums';

export default {
    title: 'Atoms/Typography',
    component: Typography,
    args: {
        align: 'inherit',
        children: 'Example Text',
        variant: 'body1',
        paragraph: false,
        loading: false,
    },
    argTypes: {
        children: {
            description: 'Text to be rendered',
        },
        variant: {
            description: 'What style this text should be rendered',
            options: textVariants,
        },
        align: {
            description: 'Set the text-align on the component',
            options: alignments,
        },
        paragraph: {
            description: 'If true, the element will be a paragraph element',
        },
    },
};

const Template = args => <Typography {...args} />;

export const Default = Template.bind({});
