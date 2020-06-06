<script>
    import ContactCard from "./ContactCard.svelte";
    import {createEventDispatcher} from "svelte";
    export let cardObj;
    const dispatch = createEventDispatcher();
    function close(){
        dispatch("closeModal");
    }
</script>
<style>
    button{
        margin: 1rem .2rem;
    }
    .modal-backdrop{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.75);
        z-index: 10;
    }
    .modal{
        position: fixed;
        top: 10vh;
        left: 10%;
        width: 600px;
        height: 400px;

        background: white;
        border-radius: 5px;
        z-index: 100;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        
    }
    .card-holder{
        position: absolute;
        top: 20%;
        bottom: 20%;
        left: 5%;
        right: 5%;
        
    }
</style>

<div class="modal-backdrop">
    <div class="modal">
    
        <div class="card-holder">
            <ContactCard 
		        image="{cardObj.image}" 
		        userName="{cardObj.name}" 
		        userTitle="{cardObj.title}" 
		        userDesc="{cardObj.description}"
		        nationImg="{cardObj.icon}"
                />
        </div>
        <button on:click={close}>Close</button>
        <button class="full">Delete</button>
        <button>Shuffle to top</button>
    </div>
</div>