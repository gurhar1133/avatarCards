<script>
	 let defaultImage;
	 let name;
	 let title;
	 let description;
	 let newCard = {};
	 let allCards = [];
	 let addMode = false;
	 let cardsPresent = false;
	export let nations;
	let icon;
	import {fly, fade, scale, slide} from "svelte/transition";
	import {customStore} from './CardStore.js';
	import {flip} from "svelte/animate";
	import ContactCard from './ContactCard.svelte';
	import EditCard from "./EditCard.svelte";
	import CardGrid from "./CardGrid.svelte";
	// $: variables dynamically update
	const log = (varName)=>{
		console.log(varName);
	};



	//$: Uname = name.toUpperCase();
	// think how useful $: obj.update(data)
	// or $: updateUI(data) could be

	$: log(name);

	// you can even use this guy with conditionals
	const changeNation = (event)=>{
		console.log(event.target.value);
		icon = nations[event.target.value];
	};

	function addToGrid(event){
		cardsPresent = true;
		console.log("addding card to grid");
		newCard = {...event.detail, id: Math.random().toString()};
		console.log(newCard);
		customStore.addCard(newCard);
		//console.log(allCards);
	}

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
	.contact-div{
		/* position: absolute;
    	top: 15%;
    	right: 7%; */
	}
	.collection-head{
		text-align: center;
	}
</style>



<h3>Avatar card builder</h3>

<!-- setting up a connection between input
	and name. setting up an event listener
	on:input"{var}". This listens to keystroke 
	changes. Below we have a two way binding -->

	<button on:click={()=>{addMode = !addMode}}>{addMode ? "close form":"add cards"}</button>

{#if addMode}
	<div transition:slide={{duration: 700}}>
		<EditCard
			defaultImage="{defaultImage}"
			name="{name}"
			title="{title}"
			description="{description}"
			icon="{icon}"
			on:addCard={addToGrid}

			/>
	</div>
{/if}
{#if cardsPresent }
	<h2 class="collection-head">Your collection</h2>

<div class="contact-div">
	<!---->
	
		<CardGrid cardList="{$customStore}"/>
	
		<!-- <p>No cards yet. Add a card to the collection</p>
	 -->
</div>
{/if}



