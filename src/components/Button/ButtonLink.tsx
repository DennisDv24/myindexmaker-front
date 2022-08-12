import { FC } from 'react';
import { Link, LinkProps } from "../Link/Link"
import { ButtonProps } from "./Button"

type ButtonLinkProps = LinkProps & Pick<ButtonProps, 'value'>;

export const ButtonLink: FC<ButtonLinkProps> = ({
    link,
    value,
    linkToProps
}) => {
    return (
        <Link link={link} linkToProps={{ className: 'button button--rectangle button-type--a', ...linkToProps}}  >
            {value}
        </Link>
    )
}
