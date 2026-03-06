import { applyDestinationCatalogOverride } from "./requestedDestinationCatalog";

export const quickGetaways = [

  {

    id: 'qg-1',

    slug: 'purulia',

    title: 'Purulia',

    image: '/thumbnails/purulia.jpg',

    shortDescription: 'Rugged hills, tribal culture, and seasonal palash blooms.',

    heroPitch: 'Purulia blends red-earth landscapes, quiet hillocks, and folk traditions for a refreshing short break from Kolkata.',

    destinationDifference: [

      'Known for Chhau dance heritage and indigenous craft traditions',

      'Ayodhya Hills offer easy drives and viewpoint stops',

      'Spring season turns the region vibrant with palash blooms',

      'Great for road-trip style weekend itineraries'

    ],

    highlights: [

      'Ayodhya Hills and upper/lower dam viewpoints',

      'Charida artisan village for Chhau mask craft',

      'Forest-edge sunset points and picnic spots',

      'Local cuisine and culture-focused village walks'

    ],

    itinerary: [

      { day: 'Day 1', plan: 'Arrive, local viewpoint loop, and evening village market walk.' },

      { day: 'Day 2', plan: 'Ayodhya Hills circuit with dams, waterfalls, and scenic drives.' },

      { day: 'Day 3', plan: 'Charida craft stop and relaxed return journey to Kolkata.' }

    ],

    faqs: [

      { q: 'Is Purulia suitable for a weekend?', a: 'Yes, it works very well for a 2N/3D road trip from Kolkata.' },

      { q: 'When is the best time to visit?', a: 'Winter and spring are most comfortable and scenic.' }

    ]

  },

  {

    id: 'qg-2',

    slug: 'sundarban',

    title: 'Sundarban',

    image: 'https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg',

    shortDescription: 'Mangrove creeks, boat safaris, and delta wildlife.',

    heroPitch: 'The Sundarban offers a unique tidal wilderness experience with forest creeks, watchtowers, and village life.',

    destinationDifference: [

      'Largest mangrove ecosystem in the world',

      'Network of tidal rivers and narrow boat channels',

      'Distinct culture shaped by river and forest life',

      'A rare ecosystem close to Kolkata'

    ],

    highlights: [

      'Guided boat safari through reserve zones',

      'Watchtower visits for wildlife observation',

      'Local island village interaction',

      'Traditional folk performances on request'

    ],

    itinerary: [

      { day: 'Day 1', plan: 'Transfer to jetty, boat check-in, and evening river cruise.' },

      { day: 'Day 2', plan: 'Full-day safari route with watchtower and creek channels.' },

      { day: 'Day 3', plan: 'Breakfast cruise and return transfer to Kolkata.' }

    ],

    faqs: [

      { q: 'Will we definitely see a tiger?', a: 'Tiger sightings are rare and never guaranteed, but the ecosystem itself is extraordinary.' },

      { q: 'Is this family friendly?', a: 'Yes, it is suitable for families with basic comfort planning.' }

    ]

  },

  {

    id: 'qg-3',

    slug: 'jhargram',

    title: 'Jhargram',

    image: '/thumbnails/jhargram.jpg',

    shortDescription: 'Sal forests, tribal heritage, and peaceful weekend stays.',

    heroPitch: 'Jhargram is a calm forest-side escape known for red-soil landscapes, heritage landmarks, and low-crowd travel.',

    destinationDifference: [

      'Easy access from Kolkata by road and rail',

      'Forest and heritage blend in one compact zone',

      'Ideal for relaxed, low-noise weekends',

      'Good for nature and culture photography'

    ],

    highlights: [

      'Jhargram Rajbari surroundings',

      'Forest drive and eco-park route',

      'Tribal art and local market interaction',

      'Nearby nature trails and viewpoints'

    ],

    itinerary: [

      { day: 'Day 1', plan: 'Arrive and explore local heritage and evening market area.' },

      { day: 'Day 2', plan: 'Forest-side excursion and nearby eco spots.' },

      { day: 'Day 3', plan: 'Leisure morning and departure to Kolkata.' }

    ],

    faqs: [

      { q: 'Is Jhargram a quick trip option?', a: 'Yes, it is one of the easiest 2N weekend options from Kolkata.' },

      { q: 'Best season?', a: 'October to February offers the most pleasant weather.' }

    ]

  },

  {

    id: 'qg-4',

    slug: 'digha',

    title: 'Digha',

    image: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg',

    shortDescription: 'Popular sea getaway with beach promenades and easy access.',

    heroPitch: 'Digha remains one of Bengal’s most loved coastal breaks for quick sea-view escapes and family-friendly plans.',

    destinationDifference: [

      'One of the closest beach destinations from Kolkata',

      'Good for short breaks with minimal travel complexity',

      'Wide range of stay options for different budgets',

      'Easy combination with nearby coastal spots'

    ],

    highlights: [

      'New and Old Digha beach walks',

      'Sunrise and evening promenade visits',

      'Local seafood food circuit',

      'Optional nearby excursion add-ons'

    ],

    itinerary: [

      { day: 'Day 1', plan: 'Transfer, check-in, and sunset promenade experience.' },

      { day: 'Day 2', plan: 'Beach leisure, local points, and food exploration.' },

      { day: 'Day 3', plan: 'Morning beach time and return to Kolkata.' }

    ],

    faqs: [

      { q: 'Is Digha good for families?', a: 'Yes, it is one of the most family-friendly coastal options nearby.' },

      { q: 'How many nights are enough?', a: '2 nights are usually enough for a comfortable trip.' }

    ]

  },

  {

    id: 'qg-5',

    slug: 'mandarmani',

    title: 'Mandarmani',

    image: '/thumbnails/mandarmani.jpg',

    shortDescription: 'Long beach stretches and quieter seaside stays.',

    heroPitch: 'Mandarmani offers a calmer coastal vibe with wider shorelines and relaxed resort-style stays.',

    destinationDifference: [

      'Quieter alternative to high-traffic beaches',

      'Long flat beach belts for long walks',

      'Great for laid-back weekend itineraries',

      'Suitable for couples and families alike'

    ],

    highlights: ['Beachfront stays', 'Sunrise coast walks', 'Local seafood options', 'Nearby beach-hopping plans'],

    itinerary: [

      { day: 'Day 1', plan: 'Transfer, check-in, and evening beach relaxation.' },

      { day: 'Day 2', plan: 'Leisure day with optional beach activity add-ons.' },

      { day: 'Day 3', plan: 'Morning coast walk and return.' }

    ],

    faqs: [

      { q: 'Is Mandarmani less crowded?', a: 'Usually yes, compared to major beach hubs on weekends.' },

      { q: 'Can we combine with Tajpur?', a: 'Yes, a combined coastal circuit is very common.' }

    ]

  },

  {

    id: 'qg-6',

    slug: 'tajpur',

    title: 'Tajpur',

    image: 'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg',

    shortDescription: 'Serene beach retreat with red crab shorelines.',

    heroPitch: 'Tajpur is perfect for travelers who want a quieter beach atmosphere and simple, restful plans.',

    destinationDifference: ['Low-crowd beach character', 'Ideal for quiet weekend stays', 'Known for red crab sightings', 'Good for short private getaways'],

    highlights: ['Relaxed shoreline time', 'Sunset/sunrise views', 'Resort-side leisure', 'Optional Mandarmani/Tajpur combo'],

    itinerary: [

      { day: 'Day 1', plan: 'Arrival and relaxed coastal evening.' },

      { day: 'Day 2', plan: 'Full leisure day and local beach exploration.' },

      { day: 'Day 3', plan: 'Checkout and return to Kolkata.' }

    ],

    faqs: [

      { q: 'Is Tajpur suitable for quick breaks?', a: 'Yes, it is one of the best short beach escapes from Kolkata.' },

      { q: 'Best duration?', a: '2 nights works best for a relaxed experience.' }

    ]

  },

  {

    id: 'qg-7',

    slug: 'shantiniketan',

    title: 'Shantiniketan',

    image: '/thumbnails/shantiniketan.jpg',

    shortDescription: 'Art, culture, and Tagore heritage in a calm setting.',

    heroPitch: 'Shantiniketan offers an enriching cultural break with art spaces, open campuses, and Bengal literary heritage.',

    destinationDifference: ['Strong Rabindranath Tagore legacy', 'Culture-first short getaway format', 'Good for family and student trips', 'Craft, art, and heritage combined'],

    highlights: ['Visva-Bharati surroundings', 'Craft and artisan hubs', 'Seasonal cultural events', 'Relaxed town exploration'],

    itinerary: [

      { day: 'Day 1', plan: 'Arrival and campus-side local exploration.' },

      { day: 'Day 2', plan: 'Heritage and craft-focused sightseeing.' },

      { day: 'Day 3', plan: 'Leisure morning and return.' }

    ],

    faqs: [

      { q: 'Is it suitable for educational trips?', a: 'Yes, it is one of the most popular culture-led educational destinations.' },

      { q: 'Can this be done in 2 days?', a: 'Yes, a 2D/1N or 3D/2N plan works well.' }

    ]

  },

  {

    id: 'qg-8',

    slug: 'dooars',

    title: 'Dooars',

    image: '/thumbnails/duars.jpg',

    shortDescription: 'Forest routes, tea gardens, and wildlife belts.',

    heroPitch: 'Dooars is a nature-rich North Bengal escape with forests, riverbeds, tea country roads, and safari options.',

    destinationDifference: ['Excellent for wildlife and nature lovers', 'Combines forests and foothill villages', 'Great for family group travel', 'Multi-point scenic circuit potential'],

    highlights: ['Gorumara/Jaldapara zones', 'Scenic river and forest drives', 'Tea garden landscapes', 'Optional safari plans'],

    itinerary: [

      { day: 'Day 1', plan: 'Transfer and local forest-edge orientation.' },

      { day: 'Day 2', plan: 'Full sightseeing and optional safari activity.' },

      { day: 'Day 3', plan: 'Leisure and return/transfer continuation.' }

    ],

    faqs: [

      { q: 'Best season for Dooars?', a: 'Winter and post-monsoon months are usually ideal.' },

      { q: 'Is safari included by default?', a: 'Safari is usually optional and depends on permit availability.' }

    ]

  },

  {

    id: 'qg-9',

    slug: 'darjeeling',

    title: 'Darjeeling',

    image: '/thumbnails/darjeeling-and-offbeat.jpg',

    shortDescription: 'Tea gardens, heritage charm, and Himalayan viewpoints.',

    heroPitch: 'Darjeeling brings together mountain culture, tea estate beauty, and classic hill-town experiences.',

    destinationDifference: ['Iconic hill destination of North Bengal', 'Strong tea and railway heritage', 'All-age family travel favorite', 'Easy to combine with offbeat nearby places'],

    highlights: ['Tiger Hill sunrise belt', 'Mall and Chowrasta', 'Tea garden viewpoints', 'Heritage and monastery stops'],

    itinerary: [

      { day: 'Day 1', plan: 'Arrival and evening Mall exploration.' },

      { day: 'Day 2', plan: 'Local sightseeing and viewpoint circuit.' },

      { day: 'Day 3', plan: 'Tea and leisure stop, then departure.' }

    ],

    faqs: [

      { q: 'Is Darjeeling good year-round?', a: 'Yes, but winter and spring are especially popular.' },

      { q: 'Can we add offbeat areas?', a: 'Yes, we can combine nearby offbeat villages.' }

    ]

  },

  {

    id: 'qg-10',

    slug: 'kalimpong',

    title: 'Kalimpong',

    image: '/thumbnails/kalimpong.avif',

    shortDescription: 'Peaceful hill town with monasteries and valley views.',

    heroPitch: 'Kalimpong is ideal for travelers seeking less-crowded mountain stays and panoramic valley landscapes.',

    destinationDifference: ['Quieter than major hill stations', 'Strong monastery and colonial touchpoints', 'Pleasant weather in most seasons', 'Great for slow-travel style plans'],

    highlights: ['Monastery visits', 'Viewpoint loop', 'Flower and nursery culture', 'Riverside valley outlooks'],

    itinerary: [

      { day: 'Day 1', plan: 'Arrival and local town orientation.' },

      { day: 'Day 2', plan: 'Monastery and viewpoint sightseeing.' },

      { day: 'Day 3', plan: 'Leisure morning and checkout.' }

    ],

    faqs: [

      { q: 'Is Kalimpong family friendly?', a: 'Yes, it is excellent for low-pace family trips.' },

      { q: 'Can we combine Darjeeling and Kalimpong?', a: 'Yes, this is a common and recommended circuit.' }

    ]

  },

  {

    id: 'qg-11',

    slug: 'kurseong',

    title: 'Kurseong',

    image: '/thumbnails/kurseong.jpg',

    shortDescription: 'Misty tea slopes and charming hillside quietness.',

    heroPitch: 'Kurseong offers a softer, less-crowded hill experience with tea gardens, churches, and gentle mountain roads.',

    destinationDifference: ['Low-crowd hill station atmosphere', 'Strong tea estate character', 'Great stop for short hill retreats', 'Close to major transit points'],

    highlights: ['Tea garden viewpoints', 'Eagle’s Crag and hill outlooks', 'Local market walks', 'Slow, relaxed sightseeing'],

    itinerary: [

      { day: 'Day 1', plan: 'Arrival and scenic evening loop.' },

      { day: 'Day 2', plan: 'Tea and viewpoint-focused local tour.' },

      { day: 'Day 3', plan: 'Leisure and departure.' }

    ],

    faqs: [

      { q: 'Is Kurseong quieter than Darjeeling?', a: 'Yes, usually much quieter and calmer.' },

      { q: 'Is it good for couples?', a: 'Yes, it is a strong option for peaceful couple getaways.' }

    ]

  },

  {

    id: 'qg-12',

    slug: 'sandak-phu',

    title: 'Sandak Phu',

    image: '/thumbnails/sandakphu.jpg',

    shortDescription: 'Legendary ridge trails and high mountain panoramas.',

    heroPitch: 'Sandak Phu is a dream destination for trekking lovers, offering unmatched Himalayan ridge views and sunrise drama.',

    destinationDifference: ['One of eastern India’s iconic trekking routes', 'Massive panoramic Himalayan skyline views', 'Adventure-led mountain experience', 'Can be done by trek or vehicle-based circuit segments'],

    highlights: ['Singalila ridge viewpoints', 'Sunrise mountain panoramas', 'Trail-side village stays', 'Adventure-focused route planning'],

    itinerary: [

      { day: 'Day 1', plan: 'Arrival and acclimatization in base zone.' },

      { day: 'Day 2', plan: 'Trail or route progress to high-view sectors.' },

      { day: 'Day 3', plan: 'Sunrise viewpoint and descent/transfer.' }

    ],

    faqs: [

      { q: 'Is Sandak Phu beginner friendly?', a: 'It can be planned for beginners with proper pacing and support.' },

      { q: 'What is the best season?', a: 'Spring and autumn are most preferred for visibility.' }

    ]

  }

];



export const exploreIndia = [

  {

    id: 'ei-1',

    slug: 'sikkim',

    title: 'Sikkim',

    image: '/thumbnails/gangtok.jpg',

    shortDescription: 'Monasteries, mountain lakes, and Himalayan road views.',

    heroPitch: 'Sikkim is a complete Himalayan escape with monasteries, high-altitude lakes, and panoramic mountain routes.',

    destinationDifference: ['Strong monastery and mountain culture', 'Scenic pass routes and ridge viewpoints', 'Great for family and group travel', 'Easy to combine with Gangtok and nearby circuits'],

    highlights: ['Gangtok and nearby lake circuits', 'Monastery and viewpoint routes', 'Mountain road drives', 'Local cuisine and market experiences'],

    itinerary: [

      { day: 'Day 1', plan: 'Arrival and Sikkim gateway transfer.' },

      { day: 'Day 2', plan: 'Mountain sightseeing and monastery route.' },

      { day: 'Day 3', plan: 'Local sightseeing and departure/extension.' }

    ],

    faqs: [{ q: 'Are permits required?', a: 'Permit support is arranged where applicable for protected areas.' }]

  },

  {

    id: 'ei-2',

    slug: 'bhutan',

    title: 'Bhutan',

    image: '/thumbnails/bhutan.jpg',

    shortDescription: 'Dzongs, mountain valleys, and calm Himalayan culture.',

    heroPitch: 'Bhutan offers a peaceful Himalayan journey with monasteries, fortress architecture, and scenic valleys.',

    destinationDifference: ['Distinct Himalayan Buddhist culture', 'Clean, low-density mountain towns', 'Monastery and dzong heritage', 'Excellent for relaxed premium-style travel'],

    highlights: ['Paro and Thimphu circuits', 'Monastery and dzong visits', 'Valley viewpoints and local markets', 'Culture-rich guided experiences'],

    itinerary: [

      { day: 'Day 1', plan: 'Arrival and transfer to city stay with local orientation.' },

      { day: 'Day 2', plan: 'Monastery and heritage dzong circuit.' },

      { day: 'Day 3', plan: 'Scenic valley exploration and departure.' }

    ],

    faqs: [{ q: 'Do Indian travelers need visas?', a: 'Entry formalities are simpler for Indian travelers; permit help is arranged.' }]

  },

  {

    id: 'ei-3',

    slug: 'kashmir-explore-india',

    title: 'Kashmir',

    image: '/thumbnails/kashmir.jpg',

    shortDescription: 'Alpine valleys, lakes, and iconic Himalayan views.',

    heroPitch: 'Kashmir remains one of India?s most loved mountain destinations for scenic holidays.',

    destinationDifference: ['Dal Lake culture', 'Meadow valleys', 'Seasonal snow zones', 'Mughal heritage gardens'],

    highlights: ['Srinagar and Dal Lake', 'Gulmarg and Sonmarg', 'Pahalgam valley trails', 'Local market and cuisine'],

    itinerary: [

      { day: 'Day 1', plan: 'Arrival and Srinagar local orientation.' },

      { day: 'Day 2', plan: 'Mountain excursion day.' },

      { day: 'Day 3', plan: 'Valley exploration and departure.' }

    ],

    faqs: [{ q: 'Can this be customized?', a: 'Yes, route and stay can be personalized.' }]

  },

  {

    id: 'ei-4',

    slug: 'shimla-manali-explore-india',

    title: 'Shimla - Manali',

    image: '/thumbnails/shimla-manali.jpg',

    shortDescription: 'Classic Himachal circuit with valleys and viewpoints.',

    heroPitch: 'A balanced hill circuit with heritage spots, mountain roads, and adventure add-ons.',

    destinationDifference: ['Two major Himachal hubs', 'Scenic tunnel and valley routes', 'Family and group friendly', 'Adventure options available'],

    highlights: ['Shimla Mall Road', 'Kufri/Fagu loop', 'Solang and tunnel routes', 'Manali local points'],

    itinerary: [

      { day: 'Day 1', plan: 'Arrival and local heritage walk.' },

      { day: 'Day 2', plan: 'Scenic mountain excursion.' },

      { day: 'Day 3', plan: 'Leisure and onward transfer.' }

    ],

    faqs: [{ q: 'Can we add extra days?', a: 'Yes, extensions are available.' }]

  },

  {

    id: 'ei-5',

    slug: 'himachal-offbeat',

    title: 'Himachal offbeat (Kasol, Jivi, Tirthang etc)',

    image: '/thumbnails/himachal-offbeat.jpg',

    shortDescription: 'Offbeat valley stays, pine forests, and slow mountain travel.',

    heroPitch: 'This offbeat Himachal route is built for travelers seeking quieter mountain villages beyond crowded mainstream circuits.',

    destinationDifference: ['Less-crowded village destinations', 'Riverside and pine-forest stays', 'Relaxed pace with local experiences', 'Excellent for repeat Himachal travelers'],

    highlights: ['Kasol and Parvati valley vibe', 'Jibhi-Tirthan eco routes', 'Village trails and waterfalls', 'Cafe and local food stops'],

    itinerary: [

      { day: 'Day 1', plan: 'Arrival in valley base and slow local walk.' },

      { day: 'Day 2', plan: 'Offbeat sightseeing and nature stops.' },

      { day: 'Day 3', plan: 'Leisure and onward travel.' }

    ],

    faqs: [{ q: 'Is this suitable for families?', a: 'Yes, with route pacing based on comfort preference.' }]

  },

  {

    id: 'ei-6',

    slug: 'kalpa-kinnar',

    title: 'Kalpa Kinnar',

    image: '/thumbnails/kalpa-kinnar.jpg',

    shortDescription: 'High-altitude villages with dramatic Kinnaur mountain views.',

    heroPitch: 'Kalpa and Kinnaur deliver raw Himalayan character with orchard villages, cliffs, and unforgettable sunrise panoramas.',

    destinationDifference: ['Distinct Kinnaur architecture and culture', 'Dramatic mountain skyline', 'Apple orchard belts', 'High-altitude village immersion'],

    highlights: ['Kalpa sunrise points', 'Roghi and local village circuits', 'Temple and heritage spots', 'Himalayan valley drives'],

    itinerary: [

      { day: 'Day 1', plan: 'Arrival and valley road transfer.' },

      { day: 'Day 2', plan: 'Kalpa-Kinnaur local sightseeing.' },

      { day: 'Day 3', plan: 'Leisure and departure.' }

    ],

    faqs: [{ q: 'Is acclimatization needed?', a: 'Yes, gradual pacing is recommended for comfort.' }]

  },

  {

    id: 'ei-7',

    slug: 'lahul-spiti',

    title: 'Lahul Spiti',

    image: '/thumbnails/lahul-spiti.jpg',

    shortDescription: 'High-altitude desert valleys, monasteries, and stark landscapes.',

    heroPitch: 'Lahul Spiti is a rugged expedition-style route for travelers who love high passes, monasteries, and surreal mountain terrain.',

    destinationDifference: ['Cold desert Himalayan terrain', 'Monastery and village heritage', 'Epic high-pass road journeys', 'Strong adventure character'],

    highlights: ['Key monastery circuits', 'High-altitude passes', 'River valley settlements', 'Stargazing and photography opportunities'],

    itinerary: [

      { day: 'Day 1', plan: 'Arrival and altitude-friendly transfer.' },

      { day: 'Day 2', plan: 'Valley exploration and monastery circuit.' },

      { day: 'Day 3', plan: 'Route continuation/departure as per plan.' }

    ],

    faqs: [{ q: 'Is this beginner friendly?', a: 'It can be done with proper acclimatization and route planning.' }]

  },

  {

    id: 'ei-8',

    slug: 'goa-explore-india',

    title: 'Goa',

    image: '/thumbnails/goa.jpg',

    shortDescription: 'Beach breaks, forts, cafes, and coastal heritage.',

    heroPitch: 'Goa blends sea, history, and leisure in one easy coastal trip format.',

    destinationDifference: ['North and South Goa contrast', 'Portuguese-era heritage', 'Beach and nightlife options', 'Short break friendly'],

    highlights: ['Beach sunsets', 'Fort viewpoints', 'Old Goa churches', 'Local cuisine routes'],

    itinerary: [

      { day: 'Day 1', plan: 'Arrival and coastal leisure.' },

      { day: 'Day 2', plan: 'Sightseeing and beach circuit.' },

      { day: 'Day 3', plan: 'Leisure and departure.' }

    ],

    faqs: [{ q: 'Is it family friendly?', a: 'Yes, we can plan family-focused itineraries.' }]

  },

  {

    id: 'ei-9',

    slug: 'benaras-ayodhya',

    title: 'Benaras - Ayodhya',

    image: '/thumbnails/varanasi.jpg',

    shortDescription: 'Sacred ghats, temples, and heritage spirituality circuit.',

    heroPitch: 'This spiritual corridor combines Varanasi?s timeless riverfront rituals with Ayodhya?s newly developed temple circuit.',

    destinationDifference: ['Two major spiritual hubs in one trip', 'Strong temple and heritage value', 'Great for family pilgrimage groups', 'Well-suited for culture-focused travel'],

    highlights: ['Ganga aarti and ghat walk', 'Temple circuit and heritage alleys', 'Ayodhya mandir zone', 'Devotional and cultural experiences'],

    itinerary: [

      { day: 'Day 1', plan: 'Arrival and evening ghat experience.' },

      { day: 'Day 2', plan: 'Temple and heritage sightseeing.' },

      { day: 'Day 3', plan: 'Transfer to Ayodhya and local circuit.' }

    ],

    faqs: [{ q: 'Is this suitable for senior travelers?', a: 'Yes, with comfort-focused pacing and transfers.' }]

  },

  {

    id: 'ei-10',

    slug: 'nainital-corbett',

    title: 'Nainital - Corbett',

    image: '/thumbnails/nainital.jpg',

    shortDescription: 'Lake-town comfort with wildlife safari experience.',

    heroPitch: 'Pair calm Nainital lake views with Corbett?s forest safari atmosphere in one balanced Uttarakhand plan.',

    destinationDifference: ['Hill station + wildlife combo', 'Family and couple friendly', 'Good road connectivity', 'Leisure and safari in one route'],

    highlights: ['Naini Lake and town walk', 'Viewpoint and cable car options', 'Corbett forest safari', 'Riverside resort stays'],

    itinerary: [

      { day: 'Day 1', plan: 'Arrival in Nainital and lakefront leisure.' },

      { day: 'Day 2', plan: 'Nainital sightseeing and transfer to Corbett.' },

      { day: 'Day 3', plan: 'Safari session and onward departure.' }

    ],

    faqs: [{ q: 'Is safari included?', a: 'Safari is usually optional and can be prebooked.' }]

  },

  {

    id: 'ei-11',

    slug: 'delhi-agra',

    title: 'Delhi - Agra',

    image: '/thumbnails/delhi-agra.jpg',

    shortDescription: 'Classic heritage circuit with monuments and city culture.',

    heroPitch: 'Delhi-Agra is India?s timeless heritage pairing for history, architecture, food, and iconic landmarks.',

    destinationDifference: ['Historic and modern India in one route', 'UNESCO monuments and Mughal heritage', 'Excellent short-trip structure', 'Ideal for first-time India travelers'],

    highlights: ['Old and New Delhi circuits', 'Taj Mahal and Agra Fort', 'Street food and cultural markets', 'Museum and heritage add-ons'],

    itinerary: [

      { day: 'Day 1', plan: 'Delhi local heritage and city highlights.' },

      { day: 'Day 2', plan: 'Transfer to Agra and monument visits.' },

      { day: 'Day 3', plan: 'Sunrise Taj option and departure.' }

    ],

    faqs: [{ q: 'Best duration?', a: '3 to 4 days gives a comfortable pace for both cities.' }]

  },

  {

    id: 'ei-12',

    slug: 'vizag',

    title: 'Vizag',

    image: '/thumbnails/vizag.jpg',

    shortDescription: 'Coastal city views with nearby hill and valley excursions.',

    heroPitch: 'Vizag offers beaches, hill lookouts, and easy side trips, making it a practical all-ages coastal destination.',

    destinationDifference: ['City + beach + hill blend', 'Clean coastal promenade zones', 'Good for family and mixed groups', 'Can combine with Araku extension'],

    highlights: ['RK beach stretch', 'Kailasagiri viewpoints', 'Submarine museum and city landmarks', 'Optional Araku valley route'],

    itinerary: [

      { day: 'Day 1', plan: 'Arrival and city beachside orientation.' },

      { day: 'Day 2', plan: 'City attractions and viewpoint loop.' },

      { day: 'Day 3', plan: 'Optional Araku extension or departure.' }

    ],

    faqs: [{ q: 'Can Vizag be combined with Araku?', a: 'Yes, Vizag-Araku is one of the most popular combos.' }]

  }

];



export const allRequestedDestinations = [...quickGetaways, ...exploreIndia];



export function findRequestedDestinationBySlug(slug) {
  const destination = allRequestedDestinations.find((item) => item.slug === slug);
  return destination ? applyDestinationCatalogOverride(destination) : destination;
}



