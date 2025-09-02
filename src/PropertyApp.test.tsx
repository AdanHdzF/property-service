import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import PropertyApp from './PropertyApp';
import type { Property } from './model/types';

const mockProperties: Property[] = [
	{
		id: 1,
		image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
		title: 'Property 1',
		type: 'Type 1',
		location: 'Location 1',
		details: 'Details 1',
		host: 'Host 1',
		price: 100,
		rating: 5,
	},
	{
		id: 2,
		image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
		title: 'Property 2',
		type: 'Type 2',
		location: 'Location 2',
		details: 'Details 2',
		host: 'Host 2',
		price: 200,
		rating: 4,
	},
	{
		id: 3,
		image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
		title: 'Property 3',
		type: 'Type 3',
		location: 'Location 3',
		details: 'Details 3',
		host: 'Host 3',
		price: 300,
		rating: 3,
	},
];

describe('PropertyApp', () => {
	it('renders correctly', () => {
		render(<PropertyApp properties={mockProperties} />);
		expect(screen.getByText(mockProperties[0].title)).toBeInTheDocument();
		expect(
			screen.getByText(`Hosted by ${mockProperties[0].host}`)
		).toBeInTheDocument();
		expect(
			screen.getByText(`$${mockProperties[0].price.toString()}`)
		).toBeInTheDocument();
	});

	it('should apply correct CSS classes', () => {
		render(<PropertyApp properties={mockProperties} />);

		const card = screen.getByText(mockProperties[0].title);
		expect(card).toHaveClass('property-title');

		const rating = screen.getByText(mockProperties[0].rating);
		expect(rating).toHaveClass('rating-value');
	});

	it('renders the heading "Popular Destinations"', () => {
		render(<PropertyApp properties={mockProperties} />);
		expect(
			screen.getByRole('heading', { name: /Popular Destinations/i })
		).toBeInTheDocument();
	});

	it('renders the correct number of PropertyCard components', () => {
		render(<PropertyApp properties={mockProperties} />);
		const cards = screen.getAllByText(/Property \d/);
		expect(cards.length).toBe(mockProperties.length);
	});

	it('applies grid container and grid classes', () => {
		render(<PropertyApp properties={mockProperties} />);
		expect(
			screen.getByText('Popular Destinations').parentElement
		).toHaveClass('property-grid-container');
		expect(
			screen.getByText('Popular Destinations').nextElementSibling
		).toHaveClass('property-grid');
	});

	it('renders nothing if properties array is empty', () => {
		const { container } = render(<PropertyApp properties={[]} />);
		expect(container.querySelector('.property-grid')).toBeEmptyDOMElement();
	});

	it('renders each property card with correct props', () => {
		render(<PropertyApp properties={mockProperties} />);
		mockProperties.forEach((property) => {
			expect(screen.getByText(property.title)).toBeInTheDocument();
			expect(
				screen.getByText(`Hosted by ${property.host}`)
			).toBeInTheDocument();
			expect(screen.getByText(`$${property.price}`)).toBeInTheDocument();
		});
	});
});
