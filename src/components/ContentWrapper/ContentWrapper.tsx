"use client"

import { CardFilm } from '../CardFilm/CardFilm'
import { Search } from '../search/Search'
import styles from './ContentWrapper.module.css'

export const ContentWrapper = (): JSX.Element => {

	return (
		<div className={styles.wrapper} >
			<Search />
			<CardFilm />
		</div>
	)
}