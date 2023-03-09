import { fetchFilm } from '@/helper/fetch'
import { FilmData } from '@/interface/Film.interface'
import { pushFilm, setInput, setStatusFilm } from '@/store/filmSlice'
import { useAppDispatch, useAppSelector } from '@/store/Hooks/hooks'
import { Alert, Button, Input } from '@mui/material'
import Link from 'next/link'
import { useEffect, useTransition } from 'react'

import styles from './Search.module.css'


export const Search = (): JSX.Element => {
	const [isPending, startTransition] = useTransition();
	const state = useAppSelector(state => state.film)
	const dispatch = useAppDispatch()

	const cheakFilm = async () => {
		await fetchFilm(state.input).then(data => {
			if (data.Response === 'True') {
				dispatch(setStatusFilm('ok'))
				dispatch(pushFilm([data]))
			} else {
				dispatch(setStatusFilm('error'))
			}
		}).catch((e: Error) => {
			dispatch(setStatusFilm(e.message))
		})
	}

	useEffect(() => {
		if (state.input !== '') {
			startTransition(() => {
				cheakFilm()
			})
		}
	}, [state.input])


	return <div className={styles.wrapper}>
		<Input
			onChange={(e) => dispatch(setInput(e.target.value))}
			color="primary"
			placeholder=" Write the name of the movie"
			sx={{ width: '90%' }}
			value={state.input}
			error={state.statusFilm === 'error'}
		/>
		<Link href={'/film'} className={styles.linkButton} ><Button className={styles.button}>Find Film</Button></Link>
		{state.statusFilm === 'error' ? <Alert icon={false} color='error'>Фильм не найден</Alert> : null}
	</div>
}