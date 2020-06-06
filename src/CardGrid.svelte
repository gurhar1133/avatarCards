<script>
    import ContactCard from "./ContactCard.svelte";
    import {fly, fade, scale, slide} from "svelte/transition";
    import {flip} from "svelte/animate";
    import {createEventDispatcher} from "svelte";
    export let cardList;
    const dispatch = createEventDispatcher();
    
</script>
<style>
    .card-grid{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin: 2rem;
        text-align:center;
    }
    @media (max-width: 800px){
        .card-grid{
            grid-template-columns: repeat(1, 1fr);
        }
    }
    ContactCard{
        margin: 1rem;
    }
    
    
</style>
<section class="card-grid">
    {#each cardList as card (card.id)}
    <div in:fly={{duration:1000, y:-500}} class="contact-card" animate:flip={{duration:500}}>
        <ContactCard 
					image="{card.image}" 
					userName="{card.name}" 
					userTitle="{card.title}" 
					userDesc="{card.description}"
					nationImg="{card.icon}"
                    on:click={()=>{
                        dispatch("cardClicked", card);
                    }}
                    />
                    
    </div>
    {/each}
    
</section>
