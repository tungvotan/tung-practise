// @flow
import * as React from 'react'
import PropTypes from 'prop-types'

type LinkPropsType = {
  active: boolean,
  children: React.Node,
  onClick: () => void
}

const Link = ({ active, children, onClick } : LinkPropsType) => (
    <button
       onClick={onClick}
       disabled={active}
       style={{
           marginLeft: '4px',
       }}
    >
      {children}
    </button>
)

export default Link
