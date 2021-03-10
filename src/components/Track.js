import React from 'react'
import { useDrop, useDrag } from 'react-dnd'
import { ItemTypes } from '../Constants'
import ColorBox from './ColorBox'
export default function Track({ colors = [], moveColor, onColorLeave, name }) {
    const [{ isOver }, dropRef] = useDrop({
        accept: ItemTypes.COLOR,
        drop: (color) => moveColor(color),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    })

    const [{ isDragging }, dragRef] = useDrag({
        type: ItemTypes.COLOR_PALETTE,
        item: { name },
        collect: function (monitor) {
            return { isDragging: monitor.isDragging() }
        },
        end: (item) => console.log('drag from track color palette', item),
    })

    return (
        <div div ref={dragRef} style={{ backgroundColor: isDragging ? '#bbf' : 'rgba(0,0,0,.12' }}>
            <div className='track' ref={dropRef} style={{ backgroundColor: !isOver ? '#ebeef0' : '#5F6CD4' }}>
                {colors.length === 0 ? (
                    <div className='track-name'>
                        <p>{name}</p>
                    </div>
                ) : (
                    colors.map((color) => <ColorBox key={color} color={color} onColorLeave={onColorLeave} />)
                )}
            </div>
        </div>
    )
}
