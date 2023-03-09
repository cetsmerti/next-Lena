"use client"
import { fetchStandartFilm } from '@/store/filmSlice'
import { useAppDispatch } from '@/store/Hooks/hooks'
import Link from 'next/link'
import { useEffect } from 'react'
import styles from './Headers.module.css'

export const Header = (): JSX.Element => {
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(fetchStandartFilm())
	}, [])
	return (
		<header className={styles.head} >
			<div>
				<Link href={'/'}>Home </Link>
				|
				<Link href={'/film'} > Film Page</Link>
			</div>
			<span> Test task</span>
		</header>
	)

}

