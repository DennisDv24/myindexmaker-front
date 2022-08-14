import { FC } from 'react';
import miladyEyes from '../../resources/milady_eyes.webp';

import './loadingEyes.css'

type LoadingEyesProps = {
    props?: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
}

export const LoadingEyes: FC<LoadingEyesProps> = ({
    props
}) => {

    return (
        <img
            {...props}
            className='loading-eyes'
            src={miladyEyes}
            alt="milady eyes" 
        />
    )
}
