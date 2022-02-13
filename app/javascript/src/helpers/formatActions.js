export const formatAction = action => ({
    name: action.name || (action.delete ? 'Delete' : 'More'),
    isDelete: !!action.isDelete,
    ...action,
});

/**
 * Ensures consistency in the actions shape. If the user passes in a single action object this will convert it to an array
 * @param {object | array} actions - actions prop to be formatted
 */
export const formatActions = actions => {
    if (!actions) {
        return [];
    }

    if (actions.length >= 0) {
        return actions.map(formatAction);
    }

    return [formatAction(actions)];
};

export default formatActions;
