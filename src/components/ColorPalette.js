import React from 'react'
import { useDraggable } from '@dnd-kit/core'
import { ContainerIds } from '../Constants'
export default function ColorPalette({ paletteColor, onPaletteColorMoved }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: `${ContainerIds.colorPaletteDragId}-${paletteColor}`,
    })

    const style = transform
        ? {
              transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
              backgroundColor: '#fbb',
          }
        : undefined

    return (
        <div
            className='color-palette'
            ref={setNodeRef}
            style={
                style
                    ? style
                    : {
                          backgroundColor: paletteColor,
                      }
            }
            {...listeners}
            {...attributes}
        >
            {paletteColor && paletteColor.toUpperCase()}
        </div>
    )
}
