import { writable } from 'svelte/store';
export const chargeStore = writable({
	amount: 0
});
