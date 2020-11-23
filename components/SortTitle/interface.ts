// export type Kind = 'info' | 'positive' | 'negative' | 'warning';
// export type KindMap = Record<Kind, string>;

export interface SortTitleProps {
  /**
   * 排序标题
   */
  sortTitle: string | React.ReactNode;
  /**
   * 排序标题对应字段
   */
  value: string;
  /**
   * 排序字段
   */
  sortKey?: string;
  /**
   * 点击回调事件
   */
  onClick?: (val: string | undefined) => void;
}
