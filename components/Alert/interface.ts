export type Kind = 'info' | 'positive' | 'negative' | 'warning';
export type KindMap = Record<Kind, string>;

export interface AlertProps {
  /**
   * alert组件的类型
   * @default info
   */
  kind?: 'info' | 'positive' | 'negative' | 'warning';
  /**
   * alert组件的内容
   * @default ''
   */
  content?: string | React.ReactNode;
}
