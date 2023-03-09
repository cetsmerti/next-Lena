'use client';

import store from '@/store';
import { ReactNode } from 'react';
import { Provider } from "react-redux";

interface wrap {
	children: ReactNode
}

export function Providers({ children }: wrap) {
	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
}