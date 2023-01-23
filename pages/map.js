import React from 'react'

function Map() {
  const mapStyle = {
    position: 'absolute',
    top: 80,
    left: 0,
    width: '100%',
    height: '92%'
  }

  return (
    <main className="relative flex items-center h-screen">
      <div>
        <iframe style={mapStyle} title="Green Erasmus Basemap" src="https://arcgis.com/apps/dashboards/69efb76db2914bb3a4400a16519fc724"></iframe>
      </div>
    </main>
  )
}

export default Map