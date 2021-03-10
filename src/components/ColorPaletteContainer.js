import React from 'react'
import { useDroppable } from '@dnd-kit/core'
import ColorPalette from './ColorPalette'
import { ContainerIds } from '../Constants'
import '../App.css'

export default function ColorPaletteContainer({ colorPalettes, onPaletteColorMoved, onPaletteColorReceived }) {
    const { isOver, setNodeRef } = useDroppable({
        id: ContainerIds.colorPaletteDropId,
    })

    return (
        <div className='palette-color-container' ref={setNodeRef} style={{ backgroundColor: isOver && 'yellow' }}>
            <h3>Color Palette List</h3>
            <div className='palette-color-list'>
                {colorPalettes.map((paletteColor, i) => (
                    <ColorPalette key={i} paletteColor={paletteColor} onPaletteColorMoved={onPaletteColorMoved} />
                ))}
            </div>
        </div>
    )
}
