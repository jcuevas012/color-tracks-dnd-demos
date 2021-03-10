import React from 'react'
import { useDroppable } from '@dnd-kit/core'
import TrackList from './TrackList'
import { ContainerIds } from '../Constants'

export default function TrackContainer({ onTrackDropped, addColorToTrack, removeColorFromTrack, colorTracks = {} }) {
    const { isOver, setNodeRef } = useDroppable({
        id: ContainerIds.trackListDropId,
    })

    // const onTrackReceiveColor = (track, color) => {
    //     addColorToTrack(track, color)
    // }

    // const onColorLeaveTrack = (track, color) => {
    //     removeColorFromTrack(track, color)
    // }

    // console.log('track list over', isOver)

    return (
        <div className='tracks-container' ref={setNodeRef} style={{ backgroundColor: isOver && 'red' }}>
            <TrackList
                colorTracks={colorTracks}
                // onTrackReceiveColor={onTrackReceiveColor}
                // onColorLeaveTrack={onColorLeaveTrack}
            />
        </div>
    )
}
