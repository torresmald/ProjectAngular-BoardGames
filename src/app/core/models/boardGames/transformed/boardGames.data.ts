import { Categories } from '../../categories/transformed/category.data';
import { Category } from '../../categories/transformed/category.model';
import { NumberPlayers } from './numberPlayers.model';
import { PlayingTime } from './playingTime.model';

export const categories: Categories[] = [
  'Area Control',
  'Ameritrash',
  'Campaign',
  'Deckbuilder',
  'Deckbuilding',
  'Deck Construction',
  'Dexterity',
  'Drafting',
  'Dungeon Crawler',
  'Engine Builder',
  'Eurogame',
  'Party Game',
  'Push your Luck',
  'Roll and Move',
  'Roll and Write',
  'Social Deduction',
  'Storytelling',
  'Worker-placement',
  'Wargame',
];

export const numberPlayers: NumberPlayers[] = [
  '1 Jugador',
  '2 Jugadores',
  '4 Jugadores',
  '1/4 Jugadores',
  '1/5 Jugadores',
  '2/4 Jugadores',
  '2/5 Jugadores',
  '2/8 Jugadores',
  '2/10 Jugadores',
  '5 Jugadores',
  '5+ Jugadores',
];

export const playingTime: PlayingTime[] = ['-15 Minutos','15 Minutos'
, '30 Minutos'
, '30/60 Minutos'
, '1 Hora'
, '1/2 Horas'
, '2/3 Horas'
, '+3 Horas'
]
