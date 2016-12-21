import React from 'react'
import { style } from 'next/css'
import { zIndexes, sizes, colors } from '../constants'

const styles = style({
  backgroundColor: 'Crimson',
  position: 'absolute',
  left: '5rem',
  top: '5rem',
  color: 'white',
  padding: '1rem',
  zIndex: zIndexes.hover,
  fontSize: '1.2rem',
  lineHeight: '1.5rem',
  whiteSpace: 'pre',
  fontFamily: "'PT Mono', monospace",
  boxShadow: `0 0 ${sizes.shadow} ${colors.shadow}`,
})
const message =
`Alright there's content here now, Jordan.
    You can get off my butt.
`
export default () => (
  <div className={styles}>{message}</div>
)
