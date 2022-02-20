import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import { colors, inputTypes, inputVariants } from '@helpers/enums';

export const Input = props => {
    const [value, setValue] = useState('');
    const { autoFocus, color, onChange, size, type, value: pValue, variant } = props;

    /**
     *
     * @returns Returns the default value based on the input type
     */
    const setDefaultValue = () => {
        switch (type) {
            case 'currency':
                return setValue(pValue?.toDollars() || '');

            default:
                return setValue(pValue?.toString() || '');
        }
    };
    useEffect(setDefaultValue, [type, pValue]); // Reset the default value whenever the type changes or the prop value changes

    /**
     * Formats the input based on the input type
     *
     * @param {String | Number} value Value to be formatted
     * @returns An object with `display` and `output` value. `display` is what the user should see in the input field while `output` is what should be saved to the db
     */
    const formatValue = value => {
        let display = value;
        let output = value;

        switch (type) {
            case 'currency':
                display = value.toDollars();
                output = display.toPennies();
                break;
        }

        return {
            display,
            output,
        };
    };

    /**
     * Runs when the input field changes
     *
     * @param {object} event The event object that's triggered by a change in the input
     */
    const changed = ({ target }) => {
        let { value } = target;

        const { display, output } = formatValue(value);

        setValue(display);
        onChange(output);
    };

    const getIconSettings = () => {
        switch (type) {
            case 'currency':
                return {
                    InputProps: {
                        startAdornment: (
                            <InputAdornment position='start'>
                                <AttachMoneyRoundedIcon />
                            </InputAdornment>
                        ),
                    },
                };
        }
    };

    return (
        <TextField
            autoFocus={autoFocus}
            color={color}
            size={size}
            variant={variant}
            onChange={changed}
            value={value}
            {...getIconSettings()}
        />
    );
};

Input.propTypes = {
    autoFocus: PropTypes.bool,
    color: PropTypes.oneOf(colors),
    size: PropTypes.oneOf(['small', 'medium']),
    type: PropTypes.oneOf(inputTypes),
    variant: PropTypes.oneOf(inputVariants),
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Input.defaultProps = {
    autoFocus: false,
    color: 'primary',
    size: 'medium',
    type: 'text',
    variant: 'outlined',
};
