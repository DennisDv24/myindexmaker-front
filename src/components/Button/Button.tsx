import { FC } from 'react'
import './button.css';

type asTypes = Extract<keyof HTMLElementTagNameMap, 'a' | 'button'>;

export type ButtonProps = {
    value: string;
    shape?: 'rectangle';
    as?: asTypes;
    otherProps?: React.HTMLAttributes<HTMLElementTagNameMap[asTypes]>;
}

export const Button: FC<ButtonProps> = ({
    value,
    shape = 'rectangle',
    as = 'button',
    otherProps
}) => {

    switch (as) {
        case 'a':
            return (
                <a 
                    className={`button button--${shape}`}
                    {...otherProps}
                >
                    {value}
                </a>
            );
        case 'button':
            return (
                <button
                    className={`button button--${shape}`}
                    {...otherProps}
                >
                    {value}
                </button>
            )
    }

}