import React from 'react'

const ActionBar = () => {
  return (
    <div className="flex p-2 mb-8 border-b border-t border-[#2A2A2A] text-white justify-between">
            <select className="bg-[#0F0F0F] text-white text-sm">
              <option value="select">Filter by</option>
              <option value="select1">Location</option>
              <option value="select2">Date</option>
            </select>
            <input
              type="text"
              className="placeholder-white border rounded p-0.5 border-gray-300 bg-transparent text-sm"
              placeholder="🔍︎ Search stories"
            />
          </div>
  )
}

export default ActionBar
