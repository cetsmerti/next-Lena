import { FilmData } from '@/interface/Film.interface'

export const fetchFilm = async (filmserch: string): Promise<FilmData> => {
	filmserch = filmserch.trim().toLocaleLowerCase().replace(/\s+/g, '+')
	return fetch(`http://www.omdbapi.com/?apikey=2bd62a0d&t=${filmserch}`).then(data => data.json()).then((data: FilmData) => data)
}

