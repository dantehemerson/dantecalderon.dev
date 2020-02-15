import React from 'react'

const PaginationSeparator = React.memo(function PaginationSeparator() {
  return (
    <div
      css={`
        display: flex;
        width: 16px;
        height: 36px;
        margin: 0;
        align-items: center;
        justify-content: center;
      `}
    >
      <img
        css={`
          margin: 0;
          top: 5px;
          position: relative;
        `}
        alt="ellipsis"
        src="https://icongr.am/clarity/ellipsis-horizontal.svg?size=16&color=4d4d4d"
      />
    </div>
  )
})

export { PaginationSeparator }
