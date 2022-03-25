import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.scss';

const Button = ({ id, disabled, loading, onClick, children, color, icon }) => {
    return (
        <button
            id={id}
            className={
                classNames(
                    'ct-button',
                    { 'ct-button--white': color === 'white' }
                )}
            data-testid="ButtonId"
            disabled={disabled || loading}
            onClick={onClick}
        >
            {
                loading ?
                    <pichincha-spinner
                        size={16}
                        border={2}
                        background='white'
                        color='#c5c6cd'
                    />
                    :
                    <div id="ct-button-content">
                        {
                            icon &&
                            <pichincha-icon
                                size="20px"
                                color={color === 'red' ? 'white' : 'error'}
                                style={{marginRight: children ? 16 : 0, lineHeight: '1px'}}
                            >
                                {icon}
                            </pichincha-icon>
                        }
                        {
                        children && 
                        <p id='ct-button-text'>
                            {children}
                        </p>
                        }
                    </div>
            }
        </button>

    )
}

Button.propTypes = {
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node,
    color: PropTypes.string,
    icon: PropTypes.string
};

Button.defaultProps = {
    disabled: false,
    loading: false,
    color: 'red',
    id: 'ct-button-parent'
}

export default Button;