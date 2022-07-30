import { FC } from 'react';
import { Link, LinkProps } from "../Link/Link"
import { Button, ButtonProps } from "./Button"

type ButtonLinkProps = LinkProps & ButtonProps;

export const ButtonLink: FC<ButtonLinkProps> = ({
    as,
    link,
    value,
    otherProps
}) => {
    return (
        <Link link={link}>
            <Button as={as} value={value} {...otherProps} />
        </Link>
    )
}
