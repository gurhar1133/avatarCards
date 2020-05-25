import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Gurhar',
		div: `DOO DOO`,
		age: 27
	}
});


export default app;