"use client"
import { useAppSelector } from '@/store/Hooks/hooks'
import { Alert, CircularProgress } from '@mui/material'

import styles from './page.module.css'
export default function Film() {
	const state = useAppSelector(state => state.film)
	if (state.filmArray.length !== 0) {
		const { Title, Poster, Ratings, Director, Actors } = state.filmArray[0]
		return (
			<div className={styles.wrapper}>
				{state.statusFilm === 'error' ? <Alert icon={false} color='error'>Фильм не найден</Alert> : state.filmArray.length !== 0 ?
					<>
						<img className={styles.img} src={Poster} />
						<section className={styles.wrapperText}>
							<h1>{Title}</h1>
							<h2>{Director}</h2>
							<h3>{Actors} </h3>
							<span> {Ratings[1].Source + ":  " + Ratings[1].Value} </span>
						</section>

					</> : null}
			</div>
		)
	}
	return (<div className={styles.loading} ><CircularProgress /></div>)

}