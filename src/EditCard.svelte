<script>
    import {createEventDispatcher} from "svelte";
    export let name;
    export let title;
    export let description;
    export let defaultImage;
    export let icon;
    const dispatch = createEventDispatcher();

    function addNewCard(){
        let newCard = {
			image: defaultImage,
			name: name,
			title: title,
			description: description,
            icon: icon
		}
        dispatch("addCard", newCard);
        name = "";
        title = "";
        description = "";
        defaultImage = "";
    }
</script>
<style>
button:hover{
    background-color: rgb(167, 54, 167);
    cursor: pointer;
}
.edit-form{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-left: 3rem;
    margin-right: 3rem;
}
.field{
    margin: .5rem .5rem;
}
</style>
<div class="edit-form">

<div class="field">
<label for="name">Name:</label>
<input id="name" type="text" bind:value="{name}">
</div>

<div class="field">
<label for="selectNation"> Choose Nation: </label>
<select name="nation"  id="selectNation" bind:value={icon}>
	<option value="fire">Fire</option>
	<option value="water">Water</option>
	<option value="air">Air</option>
	<option value="earth">Earth</option>
</select>
</div>


<div class="field">
    <label for="title">Title:</label>
    <input id="title" type="text" bind:value="{title}">
</div>

<div class="field"> 
    <label for="bio">Short Bio:</label>
    <textarea id="bio" rows="4" cols="40" bind:value="{description}"></textarea>
</div>

<div class="field">
    <label for="imageURL">Image url</label>
    <input name="imageURL" type="text" bind:value="{defaultImage}">
</div>


<div class="field">
    <button on:click="{addNewCard}">Save</button>
</div>


</div>