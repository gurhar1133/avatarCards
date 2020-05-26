<script>
	export let name;
	export let age;

	import ContactCard from './ContactCard.svelte';

	// $: variables dynamically update
	const log = (varName)=>{
		console.log(varName);
	};

	$: Uname = name.toUpperCase();
	// think how useful $: obj.update(data)
	// or $: updateUI(data) could be

	$: log(name);

	// you can even use this guy with conditionals
	$: if (name === "Gurhar"){
		age = 27;
	}

	const incAge = ()=>{
		age += 1;
	};

	const changeName = ()=>{
		if (name === "Gurhar"){
			name = "Harbo Bear";
		}
		else {
			name = "Gurhar"
		}
		
	};
</script>

<style>
	h1 {
		color: rgb(167, 54, 167);
	}
	p {
		color: rgb(167, 54, 167);
	}
</style>

<h1>
	Hello, my name is {Uname}!!
</h1>

	
<p>I am {age} years old</p>
<button on:click="{incAge}">Make Older</button>
<!-- setting up a connection between input
	and name. setting up an event listener
	on:input"{var}". This listens to keystroke 
	changes. Below we have a two way binding -->
	
<input type="text" bind:value="{name}">

<!---->
<ContactCard userName="{name}"/>


