<script>
	export let defaultImage;
	export let name;
	export let title;
	export let description;
	export let nations;
	export let icon = nations["earth"];
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
	const changeNation = (event)=>{
		console.log(event.target.value);
		icon = nations[event.target.value];
	};

</script>

<style>
	h1 {
		color: rgb(167, 54, 167);
		position: absolute;
		right: 25%;
	}
	h3 {
		color: rgb(167, 54, 167);
	}
	
</style>

<h1>
	Hello, {Uname}!!
</h1>

<h3>Welcome to Avatar card builder</h3>

<!-- setting up a connection between input
	and name. setting up an event listener
	on:input"{var}". This listens to keystroke 
	changes. Below we have a two way binding -->
Choose Nation:<br>
<select name="nation"  id="selectNation" on:change="{changeNation}">
	<option value="fire">Fire</option>
	<option value="water">Water</option>
	<option value="air">Air</option>
	<option value="earth">Earth</option>
</select>
<br>Name:<br>	
<input type="text" bind:value="{name}">
<br>
Title:<br>
<input type="text" bind:value="{title}">
<br>
Short bio:<br>
<textarea rows="3" bind:value="{description}"></textarea>
<br>
<label for="imageURL">Image url</label>
<input name="imageURL" type="text" bind:value="{defaultImage}">
<br>

<!---->
<ContactCard 
		image="{defaultImage}" 
		userName="{name}" 
		userTitle="{title}" 
		userDesc="{description}"
		nationImg="{icon}"/>


