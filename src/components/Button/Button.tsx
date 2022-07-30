import { FC } from 'react'
import './button.css';

type asTypes = Extract<keyof HTMLElementTagNameMap, 'a' | 'button'>;

export type ButtonProps = {
    value: string;
    as: asTypes;
    otherProps?: React.HTMLAttributes<HTMLElementTagNameMap[asTypes]>;
}

export const Button: FC<ButtonProps> = ({
    value,
    as,
    otherProps
}) => {

    switch (as) {
        case 'a':
            return (
                <a 
                    {...otherProps}
                >
                    {value}
                </a>
            );
        case 'button':
            return (
                <button
                    className='button'
                    {...otherProps}
                >
                    {value}
                </button>
            )
    }

}