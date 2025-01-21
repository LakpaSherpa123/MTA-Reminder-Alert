import React from 'react'

import { TrainLines } from '../Components/TrainLineDropDown';
import { FetchTrainStatus } from '../server/Controller/MTApi';


export const ReminderPage = () => {
    return (
        <div>
            <TrainLines />
            {/* <FetchTrainStatus /> */}
        </div>
    );
}

