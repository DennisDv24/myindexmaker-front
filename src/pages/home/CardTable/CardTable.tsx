import { useState } from 'react';
import { GetItems } from '../../../components/Table/TableTypes';
import { Collection } from '../../../models/Collection';
import { DerivedCollectionsTable } from '../DerivCollections/Table/DerivedCollectionsTable'
import CollectionService from '../../../services/CollectionService/CollectionService';
import { constants } from '../DerivCollections/constants';

const getItems: GetItems<Collection> = () => CollectionService.getCollections(constants.contracts);
const getItemsExperimental: GetItems<Collection> = () => CollectionService.getCollectionsExperimental(0.9);

export const CardTable = () => {

    const [mode, setMode] = useState<'default' | 'experimental'>('default');

    const handleMode = () => {
        if (mode === 'default') setMode('experimental');
        else setMode('default');
    }

    return (
        <section className='card__table'>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                <div>
                    <p>Current mode: <span style={{ color: mode === 'experimental' ? 'red' : 'black' }} >{mode}</span></p>
                </div>
                <div>
                    <label htmlFor='changeMode' >Active experimental data: </label>
                    <input
                        type="checkbox"
                        name="mode"
                        id="changeMode"
                        onChange={handleMode}
                        checked={mode === 'experimental'}
                    />
                </div>
            </div>
            <DerivedCollectionsTable functionRetrieveData={mode === 'default' ? getItems : getItemsExperimental} />
        </section>
    )
}
