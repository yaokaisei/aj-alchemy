/**
 * マテリアルを構成する部品名
 */
export type MaterialKey =
  | 'Koxing'
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

export type MaterialName =
  | 'Foxing'
  | 'Heal Overlay'
  | 'Heal'
  | 'Quarter'
  | 'Sole'
  | 'Quarter Overlay'
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
