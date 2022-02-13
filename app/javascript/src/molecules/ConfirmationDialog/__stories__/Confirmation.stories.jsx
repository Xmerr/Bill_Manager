import React from 'react';
import { ConfirmationDialog } from '..';

let open = false;

export default {
    title: 'molecules/ConfirmationDialog',
    component: ConfirmationDialog,
    args: {
        open: open,
        title: 'Dialog Title',
        body: 'This is the dialog body',
    },
    argTypes: {
        open: {
            description: 'If the dialog box is open or not',
        },
        title: {
            description: 'Header of the dialog box',
        },
        body: {
            description: 'Main content of the dialog box',
        },
    },
};

const Template = args => <ConfirmationDialog {...args} />;

export const Default = Template.bind({});
