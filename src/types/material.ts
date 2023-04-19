/**
 * マテリアルを構成する部品名
 */
export type MaterialName =
  | 'Foxing'
  | 'HealOverlay'
  | 'Heal'
  | 'Quarter'
  | 'Sole'
  | 'QuarterOverlay'
  | 'Tip'
  | 'Vamp'
  | 'Label'
  | 'Logo'
  | 'Eyestay'
  | 'Swoosh'
  | 'Midsole'
  | 'Laces'
  | 'Tongue';

export interface Material {
  name: MaterialName;
  color: string;
}
