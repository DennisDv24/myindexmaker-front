import { FC } from 'react';
import { CardHeader } from './CardHeader/CardHeader';
import { CardNav } from './CardNav/CardNav';
import { CardTable } from './CardTable/CardTable';

import { dataExample } from './DerivCollections/data'

import './home.css';

export const Home: FC = () => {
    return (
        <div className='home' >
            <div className='card-wrapper'>
                <div className='card'>
                    <CardHeader />
                    <CardNav />
                    <CardTable items={dataExample} />
                </div>
            </div>
        </div>
    )
}
