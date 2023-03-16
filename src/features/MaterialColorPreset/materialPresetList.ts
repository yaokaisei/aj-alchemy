import { PRESET_DEFAULT } from '@src/config/materialPreset';
import { type Material } from '@src/types/material';
import {
  PRESET_BRED,
  PRESET_CHICAGO,
  PRESET_COURT_PURPLE,
  PRESET_CRIMSON_TINT,
  PRESET_DARK_MOCHA,
  PRESET_ROYAL,
  PRESET_SHADOW,
  PRESET_SHATTERED_BACKBORD,
} from './materialPreset';

interface PresetItems {
  name: string;
  preset: Material[];
}

export const presetItems = [
  {
    name: 'CHICAGO',
    preset: PRESET_CHICAGO,
  },
  {
    name: 'BRED',
    preset: PRESET_BRED,
  },
  {
    name: 'ROYAL',
    preset: PRESET_ROYAL,
  },
  {
    name: 'DARK MOCHA',
    preset: PRESET_DARK_MOCHA,
  },
  {
    name: 'SHADOW',
    preset: PRESET_SHADOW,
  },
  {
    name: 'COURT PURPLE',
    preset: PRESET_COURT_PURPLE,
  },
  {
    name: 'SHATABA',
    preset: PRESET_SHATTERED_BACKBORD,
  },
  {
    name: 'CRIMSON TINT',
    preset: PRESET_CRIMSON_TINT,
  },
] satisfies PresetItems[];
