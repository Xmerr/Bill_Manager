import React from 'react';
import { DeleteButton } from '..';

export default {
    title: 'organisms/DeleteButton',
    component: DeleteButton,
    args: {},
    argTypes: {
        onConfirm: {
            description: 'Function that deletes the record',
            action: 'Delete',
        },
    },
};

const Template = args => <DeleteButton {...args} />;

export const Default = Template.bind({});
