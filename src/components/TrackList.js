import React from 'react'
import { useDroppable } from '@dnd-kit/core'
import { ContainerIds } from '../Constants'

import Track from './Track'

export default function TrackList({ colorTracks = {}, onTrackReceiveColor, onColorLeaveTrack }) {
    const { isOver, setNodeRef } = useDroppable({
        id: ContainerIds.trackListDropId,
    })

    console.log(colorTracks)
    return (
        <>
            <h3>Track Color List</h3>
            {Object.entries(colorTracks).map(([name, colors]) => (
                <div className='track-list' key={name} ref={setNodeRef} style={{ backgroundColor: isOver && '#bbf' }}>
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
