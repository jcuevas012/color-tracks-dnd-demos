import React from 'react'
import { useDraggable } from '@dnd-kit/core'
import { ContainerIds } from '../Constants'
export default function ColorBox({ color }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: `${ContainerIds.colorBoxDragId}-${color}`,
    })

    const style = transform
        ? {
              transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
              backgroundColor: '#fbb',
          }
        : undefined

    return (
        <div
            className='color-box'
            ref={setNodeRef}
            style={
                style
                    ? style
                    : {
                          backgroundColor: color,
                      }
            }
            {...listeners}
            {...attributes}
        >
            <span>{color}</span>
        </div>
    )
}
