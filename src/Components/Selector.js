/**
 * @author Ali Hussien
 */
import React, { useState } from 'react'
import './Selector.css'

const TreeView = ({
  data,
  rootItemsOpened = [],
  toggleItemOpened = () => {},
  labelClickListener = () => {},
}) => {
  const renderItem = (item, path, parent, labelClickListener, id) => {
    if (typeof item === 'string') {
      return (
        <label onClick={labelClickListener} className="selector-child" key={id}>
          {item}
        </label>
      )
    } else if (item instanceof Object) {
      const currentPath = `${path}.${item.name}`
      const renderChildren = rootItemsOpened.has(item.name)

      return (
        <div
          onClick={() => toggleItemOpened(item)}
          className="selector-parent"
          key={currentPath}
        >
          <label className="selector-label">
            {item.name || 'Untitled item'}
          </label>
          <div>
            {renderChildren &&
              item.children &&
              item.children.map((child) =>
                renderItem(
                  child.leagueName,
                  currentPath,
                  item,
                  () => {
                    labelClickListener(child.leagueId)
                  },
                  child.leagueId
                )
              )}
          </div>
        </div>
      )
    }
  }

  return (
    <ul className="selector-item-scroll">
      <div>
        {data.map((item) => renderItem(item, 'root', null, labelClickListener))}
      </div>
    </ul>
  )
}

export default function Selector({ allLeagues, labelClickListener }) {
  const [openedItems, setOpenedItems] = useState(new Set())
  const handleToggleItemOpened = (item) => {
    if (openedItems.has(item.name)) {
      openedItems.delete(item.name)

      setOpenedItems(new Set(openedItems))
    } else {
      openedItems.add(item.name)

      setOpenedItems(new Set(openedItems))
    }
  }

  return (
    <div className="selector">
      <div className="selector-text">Select sport & league</div>
      <TreeView
        data={allLeagues}
        rootItemsOpened={openedItems}
        toggleItemOpened={handleToggleItemOpened}
        labelClickListener={labelClickListener}
      />
    </div>
  )
}
