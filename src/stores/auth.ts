import { writable } from 'svelte/store';

// Create a writable store to hold the isLoggedIn state
export const isLoggedIn = writable(false);
