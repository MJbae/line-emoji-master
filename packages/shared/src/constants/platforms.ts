import type { PlatformId, PlatformSpec } from '@/types/domain';

export const PLATFORM_SPECS: Record<PlatformId, PlatformSpec> = {
  ogq_sticker: {
    label: 'OGQ 스티커',
    description: 'For OGQ Market',
    count: 24,
    content: { width: 740, height: 640 },
    main: { width: 240, height: 240 },
    tab: { width: 96, height: 74 },
    fileNameFormat: (i: number) => `${String(i + 1).padStart(2, '0')}.png`,
  },
  line_sticker: {
    label: 'LINE 스티커',
    description: '기본 스티커',
    count: 40,
    content: { width: 370, height: 320 },
    main: { width: 240, height: 240 },
    tab: { width: 96, height: 74 },
    fileNameFormat: (i: number) => `${String(i + 1).padStart(2, '0')}.png`,
  },
  line_emoji: {
    label: 'LINE 스티커 (소형)',
    description: 'Small Stickers',
    count: 40,
    content: { width: 180, height: 180 },
    main: null,
    tab: { width: 96, height: 74 },
    fileNameFormat: (i: number) => `${String(i + 1).padStart(3, '0')}.png`,
  },
};

export const TOTAL_STICKERS = 45;
export const CHUNK_SIZE = 3;
export const API_DELAY_MS = 10000;
