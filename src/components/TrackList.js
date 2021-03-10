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
        <div className='track-list' ref={dropRef} style={{ backgroundColor: isOver ? '#bbf' : 'rgba(0,0,0,.12' }}>
            {Object.entries(colorTracks).map(([name, colors]) => (
                <Track
                    colors={colors}
                    name={name}
                    key={name}
                    onColorLeave={(color) => onColorLeaveTrack(name, color)}
                    moveColor={(color) => onTrackReceiveColor(name, color)}
                />
            ))}
        </div>
    )
}
