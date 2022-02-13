import React from 'react';
import { Dialog } from '../';

let open = false;

export default {
    title: 'molecules/Dialog',
    component: Dialog,
    args: {
        open: open,
        onClose: () => (open = false),
        title: 'Dialog Title',
        body: 'This is the dialog body',
        actions: {
            name: 'Test',
            onClick: () => alert('clicked'),
        },
    },
    argTypes: {
        open: {
            description: 'If the dialog box is open or not',
        },
        onClose: {
            description: 'What should happen when the dialog box closes',
            action: 'onClose',
        },
        title: {
            description: 'Header of the dialog box',
        },
        body: {
            description: 'Main content of the dialog box',
        },
        actions: {
            description: 'Properties of the buttons for the dialog box',
        },
    },
};

const Template = args => <Dialog {...args} />;

export const Default = Template.bind({});
