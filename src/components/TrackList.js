import React from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../Constants'

import Track from './Track'

export default function TrackList({ colorTracks = {}, onTrackReceiveColor, onColorLeaveTrack }) {
    const [{ isOver }, dropRef] = useDrop({
        accept: ItemTypes.COLOR,
        // drop: (item) => console.log('color received::', item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    })

    return (
        <>
            <h3>Track Color List</h3>
            {Object.entries(colorTracks).map(([name, colors]) => (
                <div className='track-list' key={name} ref={dropRef} style={{ backgroundColor: isOver && '#bbf' }}>
                    <Track
                        colors={colors}
                        name={name}
                        onColorLeave={(color) => onColorLeaveTrack(name, color)}
                        moveColor={(color) => onTrackReceiveColor(name, color)}
                    />
                </div>
            ))}
        </>
    )
}
