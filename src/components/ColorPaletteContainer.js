import React from 'react'
import { useDrop } from 'react-dnd'
import ColorPalette from './ColorPalette'
import { ItemTypes } from '../Constants'
import '../App.css'

export default function ColorPaletteContainer({ colorPalettes, onPaletteColorMoved, onPaletteColorReceived }) {
    const [{ isOver }, dropRef] = useDrop({
        accept: ItemTypes.COLOR_PALETTE,
        drop: (item) => onPaletteColorReceived(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    })

    return (
        <div className='palette-color-container' ref={dropRef} style={{ backgroundColor: isOver && 'yellow' }}>
            <div className='palette-color-list'>
                {colorPalettes.map((paletteColor, i) => (
                    <ColorPalette key={i} paletteColor={paletteColor} onPaletteColorMoved={onPaletteColorMoved} />
                ))}
            </div>
        </div>
    )
}
