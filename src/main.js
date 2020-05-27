import App from './App.svelte';

//svelte app instance
const app = new App({
	target: document.body,
	props: {
		name: 'Uncle Iroh',
		title: "The Dragon of the West",
		description: "I am the firelord's brother and I love tea",
		defaultImage: "https://static2.cbrimages.com/wordpress/wp-content/uploads/2019/07/avatar-uncle-iroh-3.jpeg",
		nations: {
			'earth': "https://png2.cleanpng.com/sh/68e998e92987c9fe42521b07dfdf99c6/L0KzQYm3VME5N51BfZH0aYP2gLBuTgNwc5xmRet4dYT4cra0lP9xcF5nfdtvb37qPbbokwRpNaRAhdR4bD3ndbTojL02aZU8TtdrZknpR4PsUL4yO2M2TKU7M0G4QoW3VsgxO2I7TaU6LoDxd1==/kisspng-sokka-youtube-toph-beifong-earth-symbol-decal-5ad76ebf9f72e0.1321432315240680316531.png",
		 	'fire':"https://png2.cleanpng.com/sh/c58348a24e2fb3f9dfc8dffe9a68a2ec/L0KzQYm3U8E6N5h4fZH0aYP2gLBuTftifJJ3eZ98b3vucX7ogf5oNZx0iuRqLXbsgra0jvF1cZDzRdDqdHnyfn7qjPlxaaN5i58AYXHpdrXqhcJnOZI4UJC5NUO1Q4W9UcE2OmI5UKU7MUS0SYS1kP5o/kisspng-katara-sokka-aang-korra-fire-nation-nation-cliparts-5aaffdce2f1a38.053234611521483214193.png",
		 	'water':"https://png2.cleanpng.com/sh/4be6ec8f4a0c4e38c2bc1ec9c53a0f5c/L0KzQYm3VMIxN6F1iZH0aYP2gLBuTfFidpgyi9H0a3Gwc73okCNqa5JxRdd1ZX3ofsW0iB9zepIyiAt2YnBvPbbzhf1mdqVmhJ8AYXS8drW5U8MyQJdpUJCDN0O1Roi6UsE2OmU3S6cANUW1QIS1kP5o/kisspng-aang-sokka-classical-element-korra-symbol-elemental-5ad9fd23318fd8.873267321524235555203.png",
		 	'air':"https://png2.cleanpng.com/sh/32991d49791041a53a40e6e7dea603c8/L0KzQYm3U8MxN5Z6iZH0aYP2gLBuTgp2c5Cyi9H0a3GwhLF3iL1jbZprh9DwLXPvccT6ifNidF5qhNd2ZX73PbLwkr1icaMyTdNrZHK6QYa4hsBma2YzT6kBN0e5Qoq4VcIzO2k3TqM8MUK6QnB3jvc=/kisspng-zuko-sokka-toph-beifong-classical-element-air-air-5abdb7151f0ec5.7767762915223826131272.png"
		}
	}
});



export default app;