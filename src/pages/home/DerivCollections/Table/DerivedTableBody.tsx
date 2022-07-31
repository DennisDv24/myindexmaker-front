import { FC } from 'react'
import { Collection } from '../../../../models/Collection';
import { DerivedTableRow } from './DerivedTableRow';

type DerivedTableBodyProps = {
    data: Collection[];
}

export const DerivedTableBody: FC<DerivedTableBodyProps> = ({
    data
}) => {
    
    return (
        <tbody style={{overflowY:'auto'}} >
            {data.map((collection, index) => 
                <DerivedTableRow 
                    key={collection.address} 
                    collection={collection} 
                    isOdd={index % 2 === 0}
                />    
            )}
        </tbody>
    )
}
