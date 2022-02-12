import PropTypes from 'prop-types';

export const columns = PropTypes.arrayOf(
    PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            key: PropTypes.string,
        }),
    ])
).isRequired;

export const row = PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    expand: PropTypes.node,
});

export const data = PropTypes.arrayOf(row).isRequired;

export const expandable = PropTypes.bool;

export default {
    columns,
    data,
    expandable,
    row,
};
