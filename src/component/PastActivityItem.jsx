import React from 'react';

function PastActivityItem({ activity }) {
    return (
        <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#34495e', padding: '10px', borderRadius: '5px' }}>
            <span>{activity.date}</span>
            <span>{activity.text}</span>
            <span style={{ backgroundColor: activity.status === 'Success' ? 'green' : 'red', color: '#fff', padding: '5px', borderRadius: '3px' }}>
                {activity.status}
            </span>
        </div>
    );
}

export default PastActivityItem;