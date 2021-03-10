import React, { useState } from 'react'
import './App.css'
import ColorPaletteContainer from './components/ColorPaletteContainer'
import TrackContainer from './components/TrackContainer'

const App = () => {
    const [colorMap, setColors] = useState({
        paletteA: ['blue', 'red', 'yellow'],
        paletteB: ['pink'],
        paletteC: ['green', 'tan'],
    })

    const [newColorPalettes, setNewColorPalettes] = React.useState(['orange', 'brown', 'purple'])

    const onPaletteColorMoved = (palette) => {
        console.log(palette)
    }

    const onPaletteColorReceived = (palette) => {
        if (newColorPalettes.indexOf(palette.paletteColor) >= 0) {
            return
        }

        console.log(palette, 'received')
        const colorPalettes = [...newColorPalettes, palette.name]
        setNewColorPalettes(colorPalettes)

        const newColorMap = { ...colorMap }
        delete newColorMap[palette.name]
        setColors(newColorMap)
    }

    const onTrackDropped = (item) => {
        const newColorToPaletteMove = newColorPalettes.find((paletteColor) => paletteColor === item.paletteColor)

        if (!newColorToPaletteMove) {
            return
        }

        const newPalettes = newColorPalettes.filter((palette) => palette !== newColorToPaletteMove)
        setNewColorPalettes([...newPalettes])

        const newColorMap = { ...colorMap }
        newColorMap[newColorToPaletteMove] = []
        setColors({ ...newColorMap })
    }

    const removeColorFromTrack = (track, item) => {
        const tracks = { ...colorMap }
        console.log(tracks[track])
        const newTrackColors = tracks[track].filter((color) => color !== item.color)
        tracks[track] = [...newTrackColors]
        console.log(`${item.color} remove from ${track} track`)
        setColors({ ...tracks })
    }

    const addColorToTrack = (track, { color }) => {
        const tracks = { ...colorMap }
        tracks[track].push(color)
        console.log(`${color} added to ${track} track`)
        setColors({ ...tracks })
    }

    return (
        <div className='app'>
            <div className='container'>
                <TrackContainer
                    onTrackDropped={onTrackDropped}
                    colorTracks={colorMap}
                    addColorToTrack={addColorToTrack}
                    removeColorFromTrack={removeColorFromTrack}
                />

                <ColorPaletteContainer
                    colorPalettes={newColorPalettes}
                    onPaletteColorMoved={onPaletteColorMoved}
                    onPaletteColorReceived={onPaletteColorReceived}
                />
            </div>
        </div>
    )
}

export default App
