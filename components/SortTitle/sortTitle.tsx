import React from 'react';
import classnames from 'classnames';
 import t from 'prop-types';
import { CaretDownOutlined } from '@ant-design/icons';

import { SortTitleProps } from './interface';

const prefixCls = 'nr-sortTitle';

const SortTitle: React.FC<SortTitleProps> = React.memo(({ sortKey, sortTitle = '', value, onClick }) => {
  const onClickSort = React.useCallback(() => {
    onClick && onClick(value);
  }, [value, onClick]);

  return (
    <span key={sortKey} className={prefixCls} onClick={onClickSort}>
      <span
        className={classnames(prefixCls +'-text', {
          [prefixCls +'-active']: sortKey === value,
          [prefixCls +'-allow-sort']:  !!value,
        })}
      >
        {sortTitle}
        {value &&       <CaretDownOutlined
                 className={prefixCls +'-icon'}
        />}

      </span>
    </span>
  );
});

export default SortTitle;
