export interface Artwork {
  title: string;
  author: string;
  artmovement: string;
  link: string;
  year?: string;
  copyright?: string;
  bio?: string;
}

export type PeriodKey =
  | 'medieval_and_gothic'
  | 'renaissance'
  | 'mannerism_and_baroque'
  | 'rococo'
  | 'neoclassicism'
  | 'nineteenth_century'
  | 'modern'
  | 'all_periods';

export interface Period {
  key: PeriodKey;
  label: string;
  era: string;
}

export type QuizPhase = 'answering' | 'feedback' | 'gameover' | 'victory';

export type AppView = 'intro' | 'menu' | 'quiz';
