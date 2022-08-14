import { FC } from 'react';
import { CardHeader } from './CardHeader/CardHeader';
import { CardNav } from './CardNav/CardNav';
import { CardTable } from './CardTable/CardTable';

import './home.css';

export const Home: FC = () => {
    return (
        <div className='home' >
            <div className='card-wrapper'>
                <div className='card'>
                    <CardHeader />
                    <CardNav />
                    <CardTable />
                </div>
            </div>
        </div>
    )
}
