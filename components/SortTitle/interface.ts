export interface SortTitleProps {
  /**
   * 排序标题
   */
  sortTitle: string | React.ReactNode;
  /**
   * 指定排序字段
   */
  value?: string;
  /**
   * 当前排序字段
   */
  sortKey?: string;
  /**
   * 点击回调事件
   */
  onClick?: (val: string | undefined) => void;
}
// declare const SortTitle: SortTitleProps;
// export default SortTitle;
