import { FC } from 'react'

type LinkParserProps = {
    linkProps?: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
    text: string;
}

export const LinkParser: FC<LinkParserProps> = ({ 
    linkProps,
    text
}) => {
  return (
    <a {...linkProps} >{text}</a>
  )
}
