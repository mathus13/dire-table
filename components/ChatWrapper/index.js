import React from 'react';
import PropTypes from 'prop-types';
import { style } from 'glamor';
import { colors, sizes, zIndexes } from '../constants';

const styles = {
  wrapper: style({
    backgroundColor: colors.chat,
    flex: `0 1 ${sizes.chatWidth}`,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    zIndex: zIndexes.chat,
    boxShadow: `0 0 1rem ${colors.black}`,
  }),
};

const Wrapper = ({ children }) => (
  <div className={styles.wrapper}>
    {children}
  </div>
);
Wrapper.propTypes = {
  children: PropTypes.any, //eslint-disable-line
};

export default Wrapper;
