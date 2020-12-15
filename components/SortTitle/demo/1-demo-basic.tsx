import React from 'react';
import {SortTitle} from 'newrank-design';
import 'newrank-design/lib/SortTitle/style';


const BasicDemo = () => {

  const [sortKey,setSortKey] = React.useState('')

  const changeSort = React.useCallback((sortVal: string) => {
    setSortKey(sortKey === sortVal ? '' : sortVal )
  }, [])
  return <SortTitle sortTitle="可排序标题" value="num" sortKey={sortKey} onClick={changeSort} />;
};

export default BasicDemo;
