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

    console.log('track list over', isOver)
    return (
        <div className='tracks-container' ref={dropRef} style={{ backgroundColor: isOver && 'red' }}>
            <TrackList
                colorTracks={colorTracks}
                onTrackReceiveColor={onTrackReceiveColor}
                onColorLeaveTrack={onColorLeaveTrack}
            />
        </div>
    )
}
