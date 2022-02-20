import React from 'react';
import { Tableview } from '../TableView';

export default {
    title: 'Templates/Tableview',
    component: Tableview,
    args: {
        title: 'Table View',
        subtitle: 'A template that primary function is to display table data',
        loading: false,
        columns: [{ name: 'Column1' }, 'Column2', { name: 'Column3', key: 'C3' }],
        data: [
            {
                id: 1,
                Column1: 'cell 1',
                Column2: 'cell 2',
                C3: 'cell 3',
                expand: <div>Hello World</div>,
            },
            {
                id: 2,
                Column1: 'cell 4',
                Column2: 'cell 5',
                C3: 'cell 6',
            },
        ],
    },
};

const Template = args => <Tableview {...args} />;

export const Default = Template.bind({});
