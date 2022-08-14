import React from 'react'

export const DownArrow = (props: React.SVGProps<SVGSVGElement>) => {

    return (
        <svg 
            width="1em" 
            height="1em" 
            viewBox="0 0 10 17" 
            {...props}
            fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 17L0.669872 9.5H9.33013L5 17Z" fill="currentColor" />
        </svg>
    )
}
