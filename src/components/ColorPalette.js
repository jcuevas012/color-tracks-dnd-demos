import React from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { ItemTypes } from '../Constants'
export default function ColorPalette({ paletteColor, onPaletteColorMoved }) {
    const [{ isDragging }, dragRef] = useDrag({
        type: ItemTypes.COLOR_PALETTE,
        item: { paletteColor },
        collect: function (monitor) {
            return { isDragging: monitor.isDragging() }
        },
        end: (item) => onPaletteColorMoved(item),
    })

    const [{ isOver }, dropRef] = useDrop({
        accept: ItemTypes.COLOR_PALETTE,
        // drop: (item) => onTrackDropped(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    })

    return (
        <div ref={dropRef} style={{ backgroundColor: isOver ? '#bbf' : 'rgba(0,0,0,.12' }}>
            <div
                className='color-palette'
                ref={dragRef}
                style={{
                    backgroundColor: isDragging ? '#fbb' : paletteColor,
                }}
            >
                {paletteColor && paletteColor.toUpperCase()}
            </div>
        </div>
    )
}
