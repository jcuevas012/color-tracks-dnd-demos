import React from 'react'
import { useDroppable, useDraggable } from '@dnd-kit/core'
import { ContainerIds } from '../Constants'
import ColorBox from './ColorBox'
export default function Track({ colors = [], moveColor, onColorLeave, name }) {
    // const [{ isOver }, dropRef] = useDrop({
    //     accept: ItemTypes.COLOR,
    //     drop: (color) => moveColor(color),
    //     collect: (monitor) => ({
    //         isOver: !!monitor.isOver(),
    //     }),
    // })

    // const [{ isDragging }, dragRef] = useDrag({
    //     type: ItemTypes.COLOR_PALETTE,
    //     item: { name },
    //     collect: function (monitor) {
    //         return { isDragging: monitor.isDragging() }
    //     },
    //     end: (item) => console.log('drag from track color palette', item),
    // })

    // const [{ isPaletteColorOver }, dropPaletteColorRef] = useDrop({
    //     accept: ItemTypes.COLOR_PALETTE,
    //     drop: (paletteColor) => console.log(paletteColor, 'dropped'),
    //     collect: (monitor) => ({
    //         isOver: !!monitor.isOver(),
    //     }),
    // })

    // console.log('unique track for color palette::', isPaletteColorOver)

    console.log(colors)
    console.log(name)
    console.log('---->>>')

    return (
        <div
            className='palette-color-track-drop'
            // ref={dropPaletteColorRef}
            // style={{ backgroundColor: isPaletteColorOver && 'blue' }}
        >
            <div
                className='palette-color-track-drag'
                // ref={dragRef}
                // style={{ backgroundColor: isDragging ? '#bbf' : 'rgba(0,0,0,.12' }}
            >
                <div
                    className='track'
                    // ref={dropRef}
                    // style={{ backgroundColor: !isOver ? '#ebeef0' : '#5F6CD4' }}
                >
                    <div className='color-list-container'>
                        {colors.map((color) => (
                            <ColorBox key={color} color={color} onColorLeave={onColorLeave} />
                        ))}
                    </div>
                    <div className='track-name'>{/* <p>{name && name.toUpperCase()} Track</p> */}</div>
                </div>
            </div>
        </div>
    )
}
