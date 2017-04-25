exports.seed = function(knex, Promise) { return knex('imagesdb').then(function () { return Promise.all([
knex('imagesdb').insert({url: 'https://farm3.staticflickr.com/2891/34132775241_55e4ff85ce.jpg', geo: {lat: 43.647938, lon: -79.372272, neighbourhood: 'St Lawrence Market', county: 'Toronto', region: 'Ontario', country: 'Canada'}, views: 310, palette: []),
knex('imagesdb').insert({url: 'https://farm9.staticflickr.com/8761/28651053635_f82730608d.jpg', geo: {lat: 43.635661, lon: -79.425050, neighbourhood: 'Liberty Village', county: 'Toronto', region: 'Ontario', country: 'Canada'}, views: 279, palette: []),
knex('imagesdb').insert({url: 'https://farm2.staticflickr.com/1694/24955389021_c07ac2f4d0.jpg', geo: {lat: 43.635516, lon: -79.419543, neighbourhood: 'Liberty Village', county: 'Toronto', region: 'Ontario', country: 'Canada'}, views: 1117, palette: []),
knex('imagesdb').insert({url: 'https://farm5.staticflickr.com/4185/33857437400_6d03ff63f3.jpg', geo: {lat: 43.655608, lon: -79.355492, neighbourhood: 'Trefann', county: 'Toronto', region: 'Ontario', country: 'Canada'}, views: 257, palette: []),
knex('imagesdb').insert({url: 'https://farm3.staticflickr.com/2950/33374865824_6fc648e022.jpg', geo: {lat: 43.657564, lon: -79.379954, neighbourhood: 'The Village', county: 'Toronto', region: 'Ontario', country: 'Canada'}, views: 245, palette: []),
knex('imagesdb').insert({url: 'https://farm8.staticflickr.com/7727/27497402546_4762d4919e.jpg', geo: {lat: 43.641929, lon: -79.465366, neighbourhood: 'Swansea', county: 'Toronto', region: 'Ontario', country: 'Canada'}, views: 987, palette: []),
knex('imagesdb').insert({url: 'https://farm3.staticflickr.com/2927/34240370265_262d8961f6.jpg', geo: {lat: 43.655383, lon: -79.402248, neighbourhood: 'Kensington Market', county: 'Toronto', region: 'Ontario', country: 'Canada'}, views: 2419, palette: []),
knex('imagesdb').insert({url: 'https://farm3.staticflickr.com/2889/33856490090_6e748cf760.jpg', geo: {lat: 43.664254, lon: -79.415928, neighbourhood: 'Koreatown', county: 'Toronto', region: 'Ontario', country: 'Canada'}, views: 2649, palette: []),
knex('imagesdb').insert({url: 'https://farm3.staticflickr.com/2861/34077436811_a132e0c02d.jpg', geo: {lat: 43.655856, lon: -79.355320, neighbourhood: 'Trefann', county: 'Toronto', region: 'Ontario', country: 'Canada'}, views: 276, palette: []),
knex('imagesdb').insert({url: 'https://farm3.staticflickr.com/2929/33367450514_da2ce60ce3.jpg', geo: {lat: 43.655856, lon: -79.355320, neighbourhood: 'Trefann', county: 'Toronto', region: 'Ontario', country: 'Canada'}, views: 266, palette: []),
knex('imagesdb').insert({url: 'https://farm3.staticflickr.com/2862/34199580006_a9c4a67422.jpg', geo: {lat: 43.655779, lon: -79.411625, neighbourhood: 'Palmerston', county: 'Toronto', region: 'Ontario', country: 'Canada'}, views: 3026, palette: []),
knex('imagesdb').insert({url: 'https://farm3.staticflickr.com/2911/33842418515_45f011e313.jpg', geo: {lat: 43.657347, lon: -79.379611, neighbourhood: 'The Village', county: 'Toronto', region: 'Ontario', country: 'Canada'}, views: 796, palette: []),
]);
});
};