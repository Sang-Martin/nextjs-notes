import React from 'react'

const Header = ({handleToggleDarkMode}) => {
  return (
    <div className="container flex justify-between items-center mb-16">
        <h1 className=" text-3xl font-bold">Notes App</h1>
        {/* <button className="btn btn-sm btn-outline" onClick={() => handleToggleDarkMode(toggle => !toggle)}>Toggle Mode</button> */}
    </div>
  )
}

export default Header