import PropTypes from 'prop-types';
import { colors, buttonVariants } from '@helpers/enums';

export const action = PropTypes.shape({
    color: PropTypes.oneOf(colors),
    isDelete: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(buttonVariants),
});

export const actions = PropTypes.oneOfType([PropTypes.arrayOf(action), action]);

export const columns = PropTypes.arrayOf(
    PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            key: PropTypes.string,
            presence: PropTypes.number,
        }),
    ])
).isRequired;

export const row = PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    expand: PropTypes.node,
});

export const data = PropTypes.arrayOf(row).isRequired;

export const expandable = PropTypes.bool.isRequired;

export default {
    action,
    actions,
    columns,
    data,
    expandable,
    row,
};
