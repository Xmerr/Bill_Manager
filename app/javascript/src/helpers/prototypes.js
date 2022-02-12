String.prototype.toTitleCase = function () {
    return this.valueOf().replace(
        /\w\S*/g,
        txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
};

Number.prototype.toDollars = function () {
    const dollars = this.valueOf() / 100;
    return dollars.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
