import React from 'react'
import { useDrop } from 'react-dnd'
import TrackList from './TrackList'
import { ItemTypes } from '../Constants'

export default function TrackContainer({ onTrackDropped, addColorToTrack, removeColorFromTrack, colorTracks = {} }) {
    const [{ isOver }, dropRef] = useDrop({
        accept: ItemTypes.COLOR_PALETTE,
        drop: (item) => onTrackDropped(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    })

    const onTrackReceiveColor = (track, color) => {
        addColorToTrack(track, color)
    }

    const onColorLeaveTrack = (track, color) => {
        removeColorFromTrack(track, color)
    }

    return (
        <div className='tracks-container' ref={dropRef} style={{ backgroundColor: isOver ? '#bbf' : 'rgba(0,0,0,.12' }}>
            <TrackList
                colorTracks={colorTracks}
                onTrackReceiveColor={onTrackReceiveColor}
                onColorLeaveTrack={onColorLeaveTrack}
            />
        </div>
    )
}
