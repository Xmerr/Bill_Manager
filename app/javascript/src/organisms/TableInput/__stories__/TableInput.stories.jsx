import React from 'react';
import { TableInput } from '..';

export default {
    title: 'Organisms/TableInput',
    component: TableInput,
    args: {
        columns: [{ name: 'Column1', presence: 2 }, 'Column2', { name: 'Column3', key: 'C3' }],
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
        loading: false,
    },
};

const Template = args => <TableInput {...args} />;

export const Default = Template.bind({});
