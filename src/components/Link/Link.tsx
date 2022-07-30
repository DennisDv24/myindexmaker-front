import React, { FC } from 'react'

import { Link as LinkTo } from 'react-router-dom';

export type LinkProps = {
	link: string;
}

export const Link: FC<React.PropsWithChildren<LinkProps>> = ({
	children,
	link
}) => {
	return (
		<LinkTo to={link}>
			{children}
		</LinkTo>
	);
}