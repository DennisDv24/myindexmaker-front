import React, { FC } from 'react'

import { Link as LinkTo } from 'react-router-dom';

export type LinkProps = {
	link: string;
	linkToProps?: React.HTMLAttributes<HTMLAnchorElement>; 
}

export const Link: FC<React.PropsWithChildren<LinkProps>> = ({
	children,
	linkToProps,
	link
}) => {
	return (
		<LinkTo to={link} {...linkToProps}  >
			{children}
		</LinkTo>
	);
}