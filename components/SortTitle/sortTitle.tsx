import React from 'react';
import classnames from 'classnames';
import t from 'prop-types';

import { SortTitleProps } from './interface';

const prefixCls = 'nr-sortTitle';

/** 创建排序title */
const SortTitle: React.FC<SortTitleProps> = React.memo(({ sortKey, sortTitle, value, onClick }) => {
  const onClickSort = React.useCallback(() => {
    onClick && onClick(sortKey);
  }, [sortKey, onClick]);

  return (
    <span key={sortKey} className={prefixCls} onClick={onClickSort}>
      <span
        className={classnames(styles.sortTitle, {
          [styles.active]: sortKey === value,
        })}
      >
        {sortTitle}
        <CaretDownOutlined
          className={classnames(styles.descend, {
            [styles.active]: sortKey === value,
          })}
        />
      </span>
    </span>
  );
});

export default SortTitle;
