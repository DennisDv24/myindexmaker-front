import React from 'react'

export const DefaultArrow = (props: React.SVGProps<SVGSVGElement>) => {

    return (
        <svg 
            width="1em" 
            height="1em" 
            viewBox="0 0 10 17" 
            {...props}
            fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 0L9.33013 7.5H0.669873L5 0Z" fill="currentColor" />
            <path d="M5 17L0.669872 9.5H9.33013L5 17Z" fill="currentColor" />
        </svg>
    )
}
