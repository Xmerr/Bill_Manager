String.prototype.toTitleCase = function () {
    return this.valueOf().replace(
        /\w\S*/g,
        txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
};

/**
 * Converts from pennies to dollars
 * @param {bool} formatted If true, will prepend a $
 * @returns a string in dollar format
 */
const toDollars = function (formatted) {
    const onlyNums = this.valueOf().toString().replace(/[^\d]/g, '');
    const dollars = onlyNums / 100;

    return formatted
        ? dollars.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
        : dollars.toFixed(2);
};

Number.prototype.toDollars = toDollars;
String.prototype.toDollars = toDollars;

/**
 * Converts from dollars to pennies
 * @returns an integer in pennies
 */
const toPennies = function () {
    return Math.round(this.valueOf() * 100);
};

Number.prototype.toPennies = toPennies;
String.prototype.toPennies = toPennies;
