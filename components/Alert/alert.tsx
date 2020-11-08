import React from 'react';
import t from 'prop-types';

import { AlertProps, KindMap } from './interface';

const prefixCls = 'nr-alert';

const kinds: KindMap = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502',
};

const Alert = (props: AlertProps) => {
  const { content = '', kind = 'info', ...rest } = props;
  return (
    <div
      className={prefixCls}
      style={{
        background: kinds[kind],
      }}
      {...rest}
    >
      {content}
    </div>
  );
};

export default Alert;
