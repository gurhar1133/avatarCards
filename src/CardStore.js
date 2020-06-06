import {writable} from "svelte/store";
const cardStore = writable([
    {
        image: "https://vignette.wikia.nocookie.net/avatar/images/c/c1/Iroh_smiling.png/revision/latest/top-crop/width/360/height/360?cb=20130626131914",
        name: "Iroh", 
        title: "General",
        description: "The Dragon of the West, and expert tea maker", 
        icon: "fire",
        id: "0.2508293862680213"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Avatar_Aang.png/220px-Avatar_Aang.png",
        name: "Aang", 
        title: "Avatar",
        description: "The last airbender", 
        icon: "air",
        id: "0.25082938626"
    }

]);

export const customStore = {
    subscribe: cardStore.subscribe,
    addCard:(newCardObj)=>{
        cardStore.update(cards=>{
           return [...cards, newCardObj];
        })
    },
    // toggleFavorite: (id)=>{
        
    //     meatStore.update(items=>{
    //             const updatedMeatup = {...items.find(m => m.id === id)};
    //             //toggle action
    //             updatedMeatup.isFavorite = !updatedMeatup.isFavorite;
    //             console.log("updated: ",updatedMeatup);
    //         // // seems convoluted but we need to 
    //         // // reassign everything to trigger DOM changes
    //             const meatupIndex = items.findIndex(m => m.id === id);
    //             const updatedMeatups = [...items];
    //             updatedMeatups[meatupIndex] = updatedMeatup;
    //             return updatedMeatups;
    //     });  

    // },
    setCards: (cardArray)=>{
        cardStore.set(cardArray);
    },
    // updateMeatup: (id, meatupData) =>{
    //     meatStore.update(items =>{
    //         console.log("updating");
    //         const index = items.findIndex(m => m.id === id);
    //         // spread is good for pulling properties out
    //         // of on object into a new one
    //         const updateTarget = { ...meatupData };
    //         console.log(updateTarget);
    //         const updatedItems = [...items];
    //         updatedItems[index] = updateTarget;
    //         return updatedItems;
            
    //     });
    // },
    removeCard: (id)=>{
        cardStore.update(items =>{
            return items.filter(item=>{
                return item.id !== id;
            })
        })
    }
}