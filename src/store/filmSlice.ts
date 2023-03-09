import { fetchFilm } from '@/helper/fetch';
import { FilmData } from '@/interface/Film.interface';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IInitialState {
	filmArray: FilmData[],
	input: string,
	statusStandartFilm: 'loading' | 'Ok' | 'Error' | 'notdata',
	ErrorStandartFilm: string
	statusFilm: '' | "error" | "ok",

}

const initialState: IInitialState = {
	filmArray: [],
	input: '',
	statusStandartFilm: 'notdata',
	ErrorStandartFilm: '',
	statusFilm: ''
}
export const fetchStandartFilm = createAsyncThunk(
	'film/fetchStandartFilm',
	async function (_, { rejectWithValue }) {
		try {
			let array: FilmData[] = []
			await fetchFilm('pulp fiction').then((data: FilmData) => array[0] = data)
			await fetchFilm('Fight club').then((data: FilmData) => array[1] = data)
			await fetchFilm('The Big Lebowski').then((data: FilmData) => array[2] = data)
			return array
		} catch (error) {
			const typedError = error as Error;
			return rejectWithValue(typedError.message)
		}
	}
)

const filmSlice = createSlice({
	name: 'film',
	initialState,
	reducers: {
		pushFilm(state, action: PayloadAction<FilmData[]>) {
			state.filmArray = action.payload
		},
		setInput(state, action) {
			state.input = action.payload
		},
		setStatusFilm(state, action) {
			state.statusFilm = action.payload
		}

	},
	extraReducers: (builder) => {
		builder.addCase(fetchStandartFilm.pending, (state) => {
			state.statusStandartFilm = 'loading'
		})
		builder.addCase(fetchStandartFilm.fulfilled, (state, action) => {
			state.statusStandartFilm = 'Ok'
			state.filmArray = action.payload

		})
		builder.addCase(fetchStandartFilm.rejected, (state, action) => {
			state.statusStandartFilm = 'Error',
				state.ErrorStandartFilm = action.payload as string
		})
	}
})

export const { pushFilm, setInput, setStatusFilm } = filmSlice.actions
export default filmSlice.reducer

