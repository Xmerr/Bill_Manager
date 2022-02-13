import { gql } from 'graphql-request';
import request from '@helpers/api';

export const deleteCycle = id => {
    const query = gql`
        mutation delCycle($id: Int!) {
            deleteBillingCycle(input: { id: $id }) {
                billCycle {
                    id
                }
            }
        }
    `;

    return request(query, { id: parseInt(id) });
};
