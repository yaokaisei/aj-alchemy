/**
 * マテリアルを構成する部品名
 */
export type MaterialKey =
  | 'foxing'
  | 'healOverlay'
  | 'heal'
  | 'quarter'
  | 'sole'
  | 'quarterOverlay'
  | 'tip'
  | 'vamp'
  | 'label'
  | 'logo'
  | 'eyestay'
  | 'swoosh'
  | 'midsole'
  | 'laces'
  | 'tongue';

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
