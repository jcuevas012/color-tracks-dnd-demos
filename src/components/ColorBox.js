import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../Constants'
export default function ColorBox({ color, onColorLeave }) {
    // const [{ isDragging }, dragRef] = useDrag({
    //     type: ItemTypes.COLOR,
    //     item: { color },
    //     end: (color) => onColorLeave(color),
    //     collect: function (monitor) {
    //         return { isDragging: monitor.isDragging() }
    //     },
    // })

    return (
        <div
            className='color-box'
            // ref={dragRef}
            // style={{ backgroundColor: !isDragging ? color : 'rgba(0,0,0,.12)' }}
        >
            <span>{color}</span>
        </div>
    )
}
