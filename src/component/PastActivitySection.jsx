import React from 'react';
import PastActivityItem from './PastActivityItem';
import { MdHeight } from 'react-icons/md';

function PastActivitySection({ activities }) {
    return (
        <div style={pastActivitySectionStyle}>
            {activities.map(activity => (
                <PastActivityItem key={activity.id} activity={activity} />
            ))}
        </div>
    );
}

const pastActivitySectionStyle = {
    height: '133px',
    maxHeight: '200px',
    overflowY: 'auto',
    marginTop: '20px'
}

export default PastActivitySection;