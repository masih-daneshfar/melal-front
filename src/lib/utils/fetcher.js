export const fetcher = async (url, params) => {
	const urlParams = new URLSearchParams({ ...params });

	try {
		const request = await fetch(`http://localhost:3000${url}?${urlParams}`, {
			method: 'get',
			mode: 'cors'
		});
		return request.json();
	} catch (err) {
		return { message: String(err) };
	}
};
