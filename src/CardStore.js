import {writable} from "svelte/store";
const cardStore = writable([
    
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