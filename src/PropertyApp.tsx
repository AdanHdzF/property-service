import type { Property } from './model/types';
import './PropertyApp.css';
import { PropertyCard } from './ui/PropertyCard';

// const fakeProperties = [
// 	{
// 		id: 1,
// 		image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
// 		title: 'Property 1',
// 		type: 'Type 1',
// 		location: 'Location 1',
// 		details: 'Details 1',
// 		host: 'Host 1',
// 		price: 100,
// 		rating: 5,
// 	},
// 	{
// 		id: 2,
// 		image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
// 		title: 'Property 2',
// 		type: 'Type 2',
// 		location: 'Location 2',
// 		details: 'Details 2',
// 		host: 'Host 2',
// 		price: 200,
// 		rating: 4,
// 	},
// 	{
// 		id: 3,
// 		image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
// 		title: 'Property 3',
// 		type: 'Type 3',
// 		location: 'Location 3',
// 		details: 'Details 3',
// 		host: 'Host 3',
// 		price: 300,
// 		rating: 3,
// 	},
// ];

const PropertyApp = ({ properties }: { properties: Property[] }) => {
	return (
		<div className="property-grid-container">
			<h1>Popular Destinations</h1>

			<div className="property-grid">
				{properties.map((property: Property) => (
					<PropertyCard key={property.id} {...property} />
				))}
			</div>
		</div>
	);
};

export default PropertyApp;
