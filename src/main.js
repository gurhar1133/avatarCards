import App from './App.svelte';

//svelte app instance
const app = new App({
	target: document.body,
	props: {
		name: 'Gurhar',
		age: 27
	}
});



export default app;