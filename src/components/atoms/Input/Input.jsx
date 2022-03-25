import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({ id, icon, label, placeholder, pattern, maxLength, value, onChange }) => {
    return (
        <div id={id}>
            {label && <label>{label}</label>}
            <div id='ct-input-container'>
                {
                    icon &&
                    <pichincha-icon
                    data-testid='IconInputId'
                        size="20px"
                        color='darGrey'
                        style={{ marginRight: 16, lineHeight: '1px' }}
                    >
                        {icon}
                    </pichincha-icon>
                }
                <input
                    id='ct-input'
                    data-testid='InputId'
                    pattern={pattern}
                    value={value}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    onInput={onChange}
                />
            </div>
        </div>

    )
}

Input.propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    pattern: PropTypes.string,
    maxLength: PropTypes.number,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

Input.defaultProps = {
    pattern: '[a-zA-Z0-9]*',
    maxLength: 500,
    id: 'ct-input-parent'
};

export default Input;