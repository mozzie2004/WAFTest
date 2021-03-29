const seedFoods = [
	{ 
		title: 'Chicago dog', 
		description: 'an all-beef hot dog topped with yellow mustard, green relish, chopped onions, pickle spears, sport peppers, tomato slices, and celery salt on a poppy seed bun.', 
		price: 10, 
		img: 'https://www.myturnforus.com/wp-content/uploads/2014/06/Chicago-Dog.jpg', 
		createdAt: new Date().toUTCString(), 
		updatedAt: new Date().toUTCString() },
	{ 
		title: 'Southwest Sonoran dog', 
		description: 'a bacon-wrapped hot dog topped with pinto beans, grilled onions and green peppers, and tomatillo jalapeño salsa', 
		price: 20, 
		img: 'https://img.sunset02.com/sites/default/files/styles/4_3_horizontal_inbody_900x506/public/image/2016/09/main/new-essentials-sonoran-hotdog.jpg', 
		createdAt: new Date().toUTCString(), 
		updatedAt: new Date().toUTCString() 
	},
	{ 
		title: 'Cincinnati Coney', 
		description: 'a pork and beef hot dog topped with cinnamon and chocolate-tinged chili and Cheddar cheese.', 
		price: 20, 
		img: 'https://www.seriouseats.com/2008630CheeseConey.jpg', 
		createdAt: new Date().toUTCString(), 
		updatedAt: new Date().toUTCString() 
	},
	{ 
		title: 'Junkyard Dog', 
		description: 'a hot dog topped with chili, cheese, mustard, grilled onions, and french fries. This can be found at Wienerschnitzel’s', 
		price: 12, 
		img: 'https://media-cdn.tripadvisor.com/media/photo-s/06/b7/31/8e/junkyard-dogs-and-a-bbq.jpg', 
		createdAt: new Date().toUTCString(), 
		updatedAt: new Date().toUTCString() 
	},
	{ 
		title: 'Blazin’ Dog', 
		description: 'a hot dog with green jalapeño slices, a red jalapeño, and garlic hot sauce. This can be found at Wienerschnitzel’s', 
		price: 15, 
		img: 'https://pbs.twimg.com/media/BkZm-2AIAAA3pJD.jpg', 
		createdAt: new Date().toUTCString(), 
		updatedAt: new Date().toUTCString() 
	},
	{ 
		title: 'Pastrami Dog', 
		description: 'a hot dog topped with pastrami, Swiss cheese, mustard, and a pickle, and a Bratwurst for Oktoberfest. This can be found at Irvine’s.', 
		price: 18, 
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Xgu8zVi3u2mIrAo4CW6t8t62xFrLNQmlhw&usqp=CAU', 
		createdAt: new Date().toUTCString(), 
		updatedAt: new Date().toUTCString() 
	}
];

async function up(queryInterface) {
	await queryInterface.bulkInsert('foods', seedFoods);
};

const down = async (queryInterface) => {
	await queryInterface.bulkDelete('foods', { id: seedFoods.map(u => u.id) });
};

module.exports = { up, down };