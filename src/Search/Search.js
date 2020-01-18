import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { SubNav } from '../SubNav/SubNav';
import { SearchResultsSummary } from './SearchResultsSummary/SearchResultsSummary';

export function Search() {
	return (
		<div>
			<Navbar />
			<SubNav />	
			<SearchResultsSummary />
		</div>
		
	)
}