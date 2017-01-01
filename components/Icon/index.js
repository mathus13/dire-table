/* eslint-disable max-len */
import React from 'react'
import { style } from 'next/css'

const iconPaths = {
  neutral: (
    <g>
      <path d="M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-2.538 0.988-4.923 2.782-6.718s4.18-2.783 6.718-2.783c2.538 0 4.923 0.988 6.718 2.783s2.782 4.18 2.782 6.718-0.988 4.923-2.782 6.717c-1.794 1.794-4.18 2.782-6.718 2.782zM9.5 2c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5z" />
      <path d="M13.5 13h-8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h8c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M12.5 8c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM12.5 6c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z" />
      <path d="M6.5 8c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM6.5 6c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z" />
    </g>
  ),
  mustache: (
    <g>
      <path d="M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-2.538 0.988-4.923 2.782-6.718s4.18-2.783 6.718-2.783c2.538 0 4.923 0.988 6.718 2.783s2.782 4.18 2.782 6.718-0.988 4.923-2.782 6.717c-1.794 1.794-4.18 2.782-6.718 2.782zM9.5 2c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5z" />
      <path d="M6.5 8c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM6.5 6c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z" />
      <path d="M12.5 8c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM12.5 6c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z" />
      <path d="M15.923 12.233c-0.111-0.175-0.318-0.264-0.521-0.224-0.187 0.037-0.368 0.056-0.536 0.056-0 0-0 0-0 0-0.872-0-1.402-0.503-1.962-1.036-0.533-0.506-1.084-1.030-1.903-1.030-0.597 0-1.133 0.263-1.5 0.679-0.367-0.416-0.903-0.679-1.5-0.679-0.819 0-1.37 0.524-1.903 1.030-0.561 0.533-1.090 1.036-1.962 1.036-0.169 0-0.349-0.019-0.536-0.056-0.203-0.041-0.411 0.048-0.521 0.224s-0.101 0.401 0.023 0.567c1.157 1.543 2.642 1.867 3.685 1.867 0.621 0 1.115-0.117 1.355-0.187 0.531-0.154 1.018-0.542 1.36-1.028 0.343 0.486 0.83 0.873 1.36 1.028 0.24 0.070 0.734 0.187 1.355 0.187 1.042-0 2.528-0.324 3.685-1.867 0.124-0.166 0.134-0.391 0.023-0.567zM7.86 13.52c-0.188 0.055-0.579 0.147-1.076 0.147-0.585 0-1.349-0.131-2.069-0.654 0.935-0.179 1.556-0.768 2.070-1.258 0.492-0.468 0.815-0.755 1.214-0.755 0.551 0 1 0.449 1 1 0 0.611-0.554 1.349-1.14 1.52zM12.215 13.667c-0.497 0-0.887-0.092-1.076-0.147-0.586-0.17-1.14-0.909-1.14-1.52 0-0.551 0.449-1 1-1 0.4 0 0.722 0.287 1.214 0.755 0.515 0.489 1.135 1.079 2.070 1.257-0.721 0.523-1.485 0.654-2.069 0.654z" />
    </g>
  ),
  sad: (
    <g>
      <path d="M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-2.538 0.988-4.923 2.782-6.718s4.18-2.783 6.718-2.783c2.538 0 4.923 0.988 6.718 2.783s2.782 4.18 2.782 6.718-0.988 4.923-2.782 6.717c-1.794 1.794-4.18 2.782-6.718 2.782zM9.5 2c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5z" />
      <path d="M6.5 8c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM6.5 6c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z" />
      <path d="M12.5 8c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM12.5 6c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z" />
      <path d="M5.499 15c-0.105 0-0.21-0.033-0.3-0.1-0.221-0.166-0.265-0.479-0.099-0.7 0.502-0.668 1.159-1.221 1.901-1.6 0.778-0.398 1.619-0.599 2.499-0.599s1.721 0.202 2.499 0.599c0.742 0.379 1.399 0.932 1.901 1.6 0.166 0.221 0.121 0.534-0.099 0.7s-0.534 0.121-0.7-0.099c-0.859-1.144-2.172-1.8-3.601-1.8s-2.741 0.656-3.601 1.8c-0.098 0.131-0.248 0.2-0.4 0.2z" />
    </g>
  ),
  smile: (
    <g>
      <path d="M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-2.538 0.988-4.923 2.782-6.718s4.18-2.783 6.718-2.783c2.538 0 4.923 0.988 6.718 2.783s2.782 4.18 2.782 6.718-0.988 4.923-2.782 6.717c-1.794 1.794-4.18 2.782-6.718 2.782zM9.5 2c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5z" />
      <path d="M6.5 8c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM6.5 6c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z" />
      <path d="M12.5 8c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM12.5 6c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z" />
      <path d="M9.5 17c-3.584 0-6.5-2.916-6.5-6.5 0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 3.033 2.467 5.5 5.5 5.5s5.5-2.467 5.5-5.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 3.584-2.916 6.5-6.5 6.5z" />
    </g>
  ),
}

const styles = style({
  width: '100%',
})

const Icon = ({ icon = 'neutral' }) => (
  <svg className={styles} viewBox="0 1 19 19">{iconPaths[icon]}</svg>
)
Icon.propTypes = {
  icon: React.PropTypes.string,
}

export default Icon
