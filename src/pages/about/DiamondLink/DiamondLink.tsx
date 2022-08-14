import { FC } from 'react'

type DiamondLinkProps = {
    href: string;
    label: string;
    linkProps?: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
}

export const DiamondLink: FC<DiamondLinkProps> = ({
    href,
    label,
    linkProps
}) => {
  return (
    <a 
        role='button'
        href={href}
        className='diamond-bg-wrapper diamond-bg-wrapper--type-link diamond-bg-wrapper--size-mid'
        {...linkProps}
    >
    <span className='rotate--45deg' >{label}</span>
    </a>
  )
}
