import { FC } from 'react';
import { CardHeader } from './CardHeader/CardHeader';
import { CardNav } from './CardNav/CardNav';
import { CardTable } from './CardTable/CardTable';

import { dataExample } from './DerivCollections/data'
import { DerivCollections } from './DerivCollections/DerivCollections';

import './home.css';

export const Home: FC = () => {
    return (
        <div className='home' >
            <div className='card-wrapper'>
                <div className='card'>
                    <CardHeader />
                    <CardNav />
                    <DerivCollections />
                    {/* TODO: Use CardTable component. */}
                    {/* <CardTable items={dataExample} /> */}
                </div>
            </div>
        </div>
    )
}
