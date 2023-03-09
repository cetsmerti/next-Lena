import { FilmData } from '@/interface/Film.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ICardFilm extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	filmData: FilmData
}