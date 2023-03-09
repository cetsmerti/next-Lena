
import { useAppDispatch, useAppSelector } from '@/store/Hooks/hooks';
import { Card, CardContent, CircularProgress, } from '@mui/material';


import styles from './CardFilm.module.css'



export const CardFilm = (): JSX.Element => {
	const state = useAppSelector(state => state.film)
	if (state.filmArray.length >= 1) {
		return (
			<div className={styles.wrapper}>
				{state.filmArray.map((item) => (
					<Card key={(Math.random() * Math.pow(36, 6) | 0).toString(36)} className={styles.card}>
						<img className={styles.img} src={item.Poster} alt={item.Title} />
						<CardContent className={styles.info}>

							<span>{item.Title}</span>
							<div>Rate:{item?.Ratings[2]?.Value}</div>
							<span>Year relis: {item.Released}</span>
						</CardContent>
					</Card>
				))}

			</div>
		);
	} else {
		return (<div className={styles.loading} ><CircularProgress /></div>)
	}
	// return (<div className={styles.loading} ><CircularProgress /></div>)

}