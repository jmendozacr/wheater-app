const cities = [
	{ city: "San José", country: "Costa Rica", countryCode: "CR" },
	{ city: "Estonia", country: "Estonia", countryCode: "EE" },
	{ city: "Madrid", country: "España", countryCode: "ES" },
	{ city: "Tokyo", country: "Japon", countryCode: "JP" },
];

export const getServiceCities = () => (cities);

export const getCountryNameByCountryCode = (code) => (
	cities.filter(city => city.countryCode === code)[0].country
);