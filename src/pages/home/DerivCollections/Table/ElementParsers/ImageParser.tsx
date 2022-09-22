import { FC } from 'react'

type ImageParserProps = {
    imageprops?: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
}

export const ImageParser: FC<ImageParserProps> = ({ 
    imageprops 
}) => ( <img {...imageprops} /> )

