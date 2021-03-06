/* global window */

import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import RollMessage from './RollMessage';
import ConnectionMessage from './ConnectionMessage';
import ErrorMessage from './ErrorMessage';

const lineHeight = 0.9;
const MessageWrapper = glamorous.div({
  lineHeight: `${lineHeight}rem`,
  margin: '0.4rem 0',
});

const Text = glamorous.div(
  {
    // padding: '0 1rem',
  },
);

const Message = ({ type, content, fromPlayer, thisPlayer, tableKey, players, resend }) => {
  let innerMessage;
  const resendRoll = (formula) => {
    resend(`/r ${formula}`);
  };
  switch (type) {
    case 'roll': {
      innerMessage = (
        <RollMessage onFormulaClick={resendRoll} roll={content} fromPlayer={fromPlayer} />
      );
      break;
    }
    case 'text': {
      innerMessage = <Text>{content}</Text>;
      break;
    }
    case 'connected': {
      const connectedPlayer = {
        ...players[content],
        key: content,
      };
      innerMessage = (
        <ConnectionMessage
          connectedPlayer={connectedPlayer}
          tableKey={tableKey}
          thisPlayer={thisPlayer}
        />
      );
      break;
    }
    case 'error': {
      innerMessage = <ErrorMessage>{content}</ErrorMessage>;
      break;
    }
    default: {
      innerMessage = null;
      break;
    }
  }
  return <MessageWrapper>{innerMessage}</MessageWrapper>;
};
Message.propTypes = {
  type: PropTypes.string,
  content: PropTypes.any, //eslint-disable-line
  fromPlayer: PropTypes.object,
  players: PropTypes.object,
  thisPlayer: PropTypes.object,
  tableKey: PropTypes.string,
  resend: PropTypes.func,
};

export default Message;
