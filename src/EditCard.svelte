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
    }
</script>
<style>
button:hover{
    background-color: #ccc;
    cursor: pointer;
}
</style>

Choose Nation:<br>
<select name="nation"  id="selectNation" bind:value={icon}>
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

<button on:click="{addNewCard}">Save</button>