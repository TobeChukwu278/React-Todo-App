import React from 'react';
import PastActivityItem from './PastActivityItem';

function PastActivitySection({ activities }) {
    return (
        <div>
            {activities.map(activity => (
                <PastActivityItem key={activity.id} activity={activity} />
            ))}
        </div>
    );
}

export default PastActivitySection;