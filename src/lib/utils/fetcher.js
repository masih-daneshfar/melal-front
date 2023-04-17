import { PUBLIC_API_DOMAIN } from '$env/static/public';

export const fetcher = async (url, params) => {
	const urlParams = new URLSearchParams({ ...params });

	try {
		const request = await fetch(`${PUBLIC_API_DOMAIN}${url}?${urlParams}`, {
			method: 'get',
			mode: 'cors'
		});
		return request.json();
	} catch (err) {
		return { message: String(err) };
	}
};
