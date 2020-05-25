<script>
	export let name;
	export let div;
	export let age;

	const incAge = ()=>{
		age += 1;
	};
</script>

<style>
	h1 {
		color: rgb(167, 54, 167);
	}
</style>

<h1>
	Hello, my name is {name}!!?
</h1>
<div>
	{div} mc doodoo
	<p>I am {age} years old</p>
	<button on:click="{incAge}">Change age</button>
</div>

