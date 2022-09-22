import { FC } from 'react'

type DefaultParserProps = {
    value: string;
    parser: (value: string) => string;
}

export const DefaultParser: FC<DefaultParserProps> = ({ parser, value}) => (
    <>{parser(value)}</>
)

