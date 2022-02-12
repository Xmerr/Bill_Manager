import React from 'react';
import { Table } from '../';

export default {
    title: 'Molecules/Table',
    component: Table,
    args: {
        columns: [{ name: 'Column1', presence: 3 }, 'Column2', { name: 'Column3', key: 'C3' }],
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
    argTypes: {
        columns: {
            description:
                'Column configuration including title, data source, presence, and any other settings needed to configure the table.',
        },
        data: {
            description:
                'Rows to be displayed in the table. If an element has the "expand" column (and it\'s a node) it allows the table row to be expanded. Every row requires and id',
        },
    },
};

const Template = args => <Table {...args} />;

export const Default = Template.bind({});
