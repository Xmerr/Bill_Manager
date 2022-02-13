import React from 'react';
import { DeleteDialog } from '..';

export default {
    title: 'molecules/DeleteDialog',
    component: DeleteDialog,
    args: {
        open: false,
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
        onConfirm: {
            description: 'Function that runs when the delete button is pressed',
            action: 'Delete',
        },
        onCancel: {
            description: 'Runs when the cancel or close dialog actions are triggered',
            action: 'Cancel',
        },
    },
};

const Template = args => <DeleteDialog {...args} />;

export const Default = Template.bind({});
