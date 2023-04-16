import { writable } from 'svelte/store';
export const transferStore = writable({
	amount:0,
	destNumber:""
});
