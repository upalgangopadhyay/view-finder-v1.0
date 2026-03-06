const baseOverrides = {
  "purulia": {
    duration: "3 Days / 2 Nights",
    bestTime: "October - March",
    seoTitle: "Purulia Tour Itinerary (3D/2N) from Kolkata | Viewfinder",
    seoDescription: "Purulia quick getaway with Ajodhya Hills, Charida mask village, waterfalls, and cultural experiences.",
    overview:
      "Purulia is West Bengal's red-laterite heartland, known for Ajodhya Hills, Chhau culture, tribal crafts, and scenic dam landscapes.",
    itinerary: [
      { day: "Day 1", plan: "Depart Kolkata, check in, visit Matha Tila and Bamni Falls, sunset at Murguma Dam." },
      { day: "Day 2", plan: "Pakhi Pahar and Turga Dam in morning, Charida mask village in afternoon, optional Chhau show." },
      { day: "Day 3", plan: "Panchet/Joychandi viewpoints and post-lunch return to Kolkata." }
    ],
    thingsToDo: [
      "Trek Ajodhya Hills and visit Bamni Falls",
      "Explore Charida Chhau mask village",
      "Birdwatch around Pakhi Pahar",
      "Shop Dokra and Tussar craft products"
    ],
    funFacts: [
      "Purulia hosts Tusu Parab during Makar Sankranti",
      "Joychandi Pahar featured in classic Bengali cinema",
      "Charida is globally known as a mask-making village"
    ],
    safetyCautions: [
      "Carry cash for remote belts",
      "Avoid isolated forest movement after dark",
      "Summer heat is intense; winter-spring is better",
      "Use insect repellent in forest zones"
    ]
  },
  "sundarban": {
    duration: "3 Days / 2 Nights",
    bestTime: "October - March",
    seoTitle: "Sundarban Tour Itinerary (3D/2N) | Viewfinder Travel",
    seoDescription: "Sundarban mangrove safari with Sajnekhali, Dobanki canopy walk, and guided creek exploration.",
    overview:
      "The Sundarbans, a UNESCO mangrove delta, offers one of India's most unique wildlife-boat ecosystems with estuarine forest channels.",
    itinerary: [
      { day: "Day 1", plan: "Kolkata-Canning-Godkhali route, board boat to Sajnekhali, sanctuary visit." },
      { day: "Day 2", plan: "Full-day boat safari through Dobanki and Sudhanyakhali sectors." },
      { day: "Day 3", plan: "Gosaba village and heritage stop, then return to Kolkata." }
    ],
    thingsToDo: [
      "Core-channel jungle boat safari",
      "Dobanki canopy walk",
      "Watchtower wildlife observation",
      "Island village interaction"
    ],
    funFacts: [
      "Largest mangrove delta in the world",
      "Sundarban tigers are strong swimmers",
      "Traditional honey collectors are called Mawalis"
    ],
    safetyCautions: [
      "Forest entry permit is mandatory",
      "Do not step off boats without guide clearance",
      "Medical access is limited in remote islands",
      "Monsoon tides can restrict routes"
    ]
  },
  "jhargram": {
    duration: "2 Days / 1 Night",
    bestTime: "November - February",
    overview:
      "Jhargram is a short forest retreat with heritage palace architecture, tribal culture, and relaxed Jangalmahal travel.",
    itinerary: [
      { day: "Day 1", plan: "Train transfer, Raj Palace and museum, Belpahari/Kankrajhor belt." },
      { day: "Day 2", plan: "Chilkigarh temple and local handicraft market before return." }
    ],
    thingsToDo: ["Jhargram Raj Palace visit", "Forest edge drives", "Tribal crafts shopping", "Temple circuit"],
    funFacts: ["Jhargram means village in the forest", "Sabai grass craft is regionally famous"],
    safetyCautions: ["Keep offline maps", "Limited dining outside main hotel zones", "Use local guides for deep forest routes"]
  },
  "digha": {
    duration: "2 Days / 1 Night",
    bestTime: "October - March",
    overview:
      "Digha is West Bengal's classic sea-break destination with easy connectivity, beach promenades, and family-friendly coastal activities.",
    itinerary: [
      { day: "Day 1", plan: "Kolkata transfer, New Digha beach, marine aquarium, Old Digha sunset." },
      { day: "Day 2", plan: "Sunrise beach walk, Chandaneshwar side visit, market and return." }
    ],
    thingsToDo: ["Beach activities and promenade", "Marine Aquarium", "Temple side trip", "Seafood circuit"],
    funFacts: ["Developed as beach resort in early 20th century", "Gentle coastal slope helps wading"],
    safetyCautions: ["Avoid unsafe sea zones in monsoon", "Swim only in flagged areas", "Prebook stays for weekends"]
  },
  "mandarmani": {
    duration: "2 Days / 1 Night",
    bestTime: "October - March",
    overview:
      "Mandarmani offers a calmer beach profile with long coast stretches and relaxed resort stays, often paired with Tajpur.",
    itinerary: [
      { day: "Day 1", plan: "Arrival, beachfront check-in, long shore walk, seafood evening." },
      { day: "Day 2", plan: "Tajpur side visit and return via nearby coastal routes." }
    ],
    thingsToDo: ["Long shore walk", "Crab spotting", "Seafood trail", "Tajpur-Shankarpur loop"],
    funFacts: ["Known for one of India's long motorable beach belts"],
    safetyCautions: ["Coastal roads may degrade in monsoon", "Avoid deep-water swimming without supervision", "Carry sufficient cash"]
  },
  "tajpur": {
    duration: "2 Days / 1 Night",
    bestTime: "October - March",
    overview:
      "Tajpur is a low-crowd coastal village destination ideal for quiet seaside stays and quick weekend trips.",
    itinerary: [
      { day: "Day 1", plan: "Arrival and relaxed beach evening." },
      { day: "Day 2", plan: "Fishing-village and shoreline experience, then return." }
    ],
    thingsToDo: ["Village beach walk", "Lighthouse-side route", "Seasonal red crab spotting"],
    funFacts: ["Traditional fishing settlements still shape local life"],
    safetyCautions: ["Sea currents can be strong in parts", "Carry cash for local transactions"]
  },
  "shantiniketan": {
    duration: "2 Days / 1 Night",
    bestTime: "October - March",
    overview:
      "Shantiniketan is Bengal's culture capital with Tagore legacy, open-air learning spaces, and artisan-rich weekend markets.",
    itinerary: [
      { day: "Day 1", plan: "Bolpur transfer, Visva-Bharati/Uttarayan campus exploration, Sonajhuri walk." },
      { day: "Day 2", plan: "Khoai sunrise, Sonajhuri Haat, Sriniketan and Amar Kutir visit, return." }
    ],
    thingsToDo: ["Visva-Bharati campus walk", "Sonajhuri Haat", "Khoai ravine landscape", "Batik and Kantha shopping"],
    funFacts: ["Founded by Rabindranath Tagore", "UNESCO-recognized Baul tradition is rooted here"],
    safetyCautions: ["Respect campus photography rules", "Avoid summer heat windows", "Keep belongings secure in crowded haats"]
  },
  "dooars": {
    duration: "4 Days / 3 Nights",
    bestTime: "October - April",
    overview:
      "Dooars is North Bengal's forest gateway with rhino habitats, tea gardens, and river-edge wildlife circuits.",
    itinerary: [
      { day: "Day 1", plan: "NJP/Hasimara arrival and transfer to Lataguri/Chalsa." },
      { day: "Day 2", plan: "Gorumara safari-focused day." },
      { day: "Day 3", plan: "Jaldapara transfer, Chilapata exploration, Jayanti riverside." },
      { day: "Day 4", plan: "Leisure morning and return transfer." }
    ],
    thingsToDo: ["Jeep and elephant safari", "Rhino habitat zones", "Tea estate visit", "Jayanti riverside camp"],
    funFacts: ["Dooars means gateway to Bhutan", "Jaldapara has major rhino population outside Assam"],
    safetyCautions: ["Advance safari permits are recommended", "No standing in safari vehicles", "Leech repellent needed in wet season"]
  },
  "darjeeling": {
    duration: "4 Days / 3 Nights",
    bestTime: "March-May and October-December",
    overview:
      "Darjeeling blends tea estate heritage, mountain panoramas, and iconic hill-town culture with UNESCO toy-train legacy.",
    itinerary: [
      { day: "Day 1", plan: "NJP transfer, Mall/Chowrasta evening circuit." },
      { day: "Day 2", plan: "Tiger Hill sunrise, Ghoom Monastery, Batasia, HMI and zoo." },
      { day: "Day 3", plan: "Tea estate/factory, ropeway, and Tibetan center." },
      { day: "Day 4", plan: "Peace Pagoda and return transfer." }
    ],
    thingsToDo: ["Tiger Hill sunrise", "Toy train experience", "Tea tasting", "Himalayan Mountaineering Institute"],
    funFacts: ["Darjeeling tea holds GI status", "Toy train is a UNESCO heritage line"],
    safetyCautions: ["Expect altitude adjustment on first day", "Monsoon landslides may affect roads", "Prebook transport in peak season"]
  },
  "kalimpong": {
    duration: "3 Days / 2 Nights",
    bestTime: "March-May and October-December",
    overview:
      "Kalimpong is a calmer hill town known for monasteries, flower nurseries, and sweeping Teesta valley landscapes.",
    itinerary: [
      { day: "Day 1", plan: "NJP transfer, Durpin monastery and sunset viewpoint." },
      { day: "Day 2", plan: "Deolo Hill, nurseries, monastery and heritage school route." },
      { day: "Day 3", plan: "Relli valley scenic drive and return." }
    ],
    thingsToDo: ["Monastery visits", "Deolo viewpoint", "Nursery circuit", "Local produce shopping"],
    funFacts: ["Kalimpong was once linked to Bhutan territories", "Major commercial flower supply hub"],
    safetyCautions: ["Monsoon landslides may affect access", "Respect monastery etiquette", "Leech season in lower forest belts"]
  },
  "kurseong": {
    duration: "3 Days / 2 Nights",
    bestTime: "March-May and September-December",
    overview:
      "Kurseong is a slower, less-crowded hill retreat with tea gardens, forest trails, and toy-train charm.",
    itinerary: [
      { day: "Day 1", plan: "NJP to Kurseong by toy train/cab, Eagle's Craig, evening tea-estate walk." },
      { day: "Day 2", plan: "Makaibari estate, Dow Hill forest, and sunset viewpoints." },
      { day: "Day 3", plan: "Heritage church and forest museum, then return." }
    ],
    thingsToDo: ["Toy train segment", "Makaibari tour", "Dow Hill trails", "Tea shopping"],
    funFacts: ["Known as Land of White Orchids", "Makaibari is among oldest organic tea estates"],
    safetyCautions: ["Forest stretches can be dense", "Drive carefully in fog and rain", "Carry evening layers year-round"]
  },
  "sandak-phu": {
    duration: "5 Days / 4 Nights",
    bestTime: "April-May and October-November",
    overview:
      "Sandakphu is West Bengal's highest trekking summit and a rare ridge route for multi-peak Himalayan panoramas.",
    itinerary: [
      { day: "Day 1", plan: "NJP to Mane Bhanjyang, trek to Chitrey/Tumling." },
      { day: "Day 2", plan: "Trek Tumling to Kalipokhri." },
      { day: "Day 3", plan: "Kalipokhri to Sandakphu summit stay." },
      { day: "Day 4", plan: "Descend via Phalut option or toward Gorkhey/Rimbik." },
      { day: "Day 5", plan: "Final descent and transfer back to NJP." }
    ],
    thingsToDo: ["Sandakphu summit sunrise", "Rhododendron season trekking", "Singalila birdwatching"],
    funFacts: ["Viewpoint can reveal Everest-Kanchenjunga-Lhotse-Makalu in one sweep"],
    safetyCautions: ["Acclimatization is essential above 3000m", "Cold weather gear is mandatory", "Avoid monsoon trek window"]
  },
  "kashmir-explore-india": {
    duration: "6 Days / 5 Nights",
    bestTime: "April-June and September-October",
    seoTitle: "Kashmir Tour Itinerary (6D/5N) from Kolkata | Viewfinder",
    seoDescription: "Detailed Kashmir itinerary with Srinagar, Gulmarg, Pahalgam, Sonamarg, and Dal Lake experiences.",
    overview:
      "Kashmir combines Dal Lake houseboat culture, Mughal garden heritage, alpine meadows, and iconic Himalayan valleys.",
    itinerary: [
      { day: "Day 1", plan: "Fly Kolkata-Srinagar, houseboat check-in, evening shikara ride." },
      { day: "Day 2", plan: "Shalimar-Nishat-Chashme Shahi and old city market walk." },
      { day: "Day 3", plan: "Gulmarg gondola and meadow route." },
      { day: "Day 4", plan: "Pahalgam transfer: Aru, Betaab, and Baisaran sections." },
      { day: "Day 5", plan: "Sonamarg excursion with Thajiwas options and return." },
      { day: "Day 6", plan: "Pari Mahal stop and departure." }
    ],
    thingsToDo: ["Dal Lake shikara", "Gulmarg gondola", "Wazwan cuisine", "Pashmina shopping"],
    funFacts: ["Produces most of India's saffron", "Gulmarg hosted Asia's earliest ski culture"],
    safetyCautions: ["Carry valid ID for checkpoints", "Negotiate pony/shikara fares in advance", "High-altitude areas require paced activity"]
  },
  "shimla-manali-explore-india": {
    duration: "7 Days / 6 Nights",
    bestTime: "April-June and October-November",
    overview:
      "Shimla-Manali is Himachal's signature route combining colonial heritage, valley drives, and adventure-focused mountain days.",
    itinerary: [
      { day: "Day 1", plan: "Arrival and Shimla Ridge-Mall circuit." },
      { day: "Day 2", plan: "Christ Church, Jakhu, Viceregal and optional toy train segment." },
      { day: "Day 3", plan: "Drive to Manali via Kullu and Pandoh view belt." },
      { day: "Day 4", plan: "Manali local temples, old village, and hot springs." },
      { day: "Day 5", plan: "Solang Valley and Rohtang (subject to permit/weather)." },
      { day: "Day 6", plan: "Naggar Castle, Roerich gallery, Old Manali leisure." },
      { day: "Day 7", plan: "Departure transfer to Delhi/onward journey." }
    ],
    thingsToDo: ["UNESCO Kalka-Shimla rail", "Rohtang snow corridor", "Solang adventure", "Kullu handloom shopping"],
    funFacts: ["Shimla was British summer capital", "Kalka-Shimla line has 100+ tunnels"],
    safetyCautions: ["Rohtang permits are limited", "Winter closures are common", "Altitude effects possible in high pass zones"]
  },
  "himachal-offbeat": {
    duration: "6 Days / 5 Nights",
    bestTime: "April-June and September-November",
    overview:
      "Offbeat Himachal combines Kasol, Jibhi, Jalori, and Tirthan for low-crowd valleys, treks, and river-side experiences.",
    itinerary: [
      { day: "Day 1", plan: "Arrive Bhuntar and transfer to Kasol." },
      { day: "Day 2", plan: "Kheerganga trek and valley immersion." },
      { day: "Day 3", plan: "Kasol to Jibhi/Jalori and Serolsar sector." },
      { day: "Day 4", plan: "Jibhi-Chehni Kothi and move to Tirthan." },
      { day: "Day 5", plan: "Tirthan and GHNP buffer trails." },
      { day: "Day 6", plan: "Return to Kullu/Bhuntar and onward transfer." }
    ],
    thingsToDo: ["Kheerganga trek", "Serolsar Lake", "Tirthan river trail", "Kasol cafe culture"],
    funFacts: ["Kasol is often called Mini Israel", "GHNP is UNESCO World Heritage listed"],
    safetyCautions: ["Trail sections can be slippery in rain", "Acclimatize for Jalori heights", "Connectivity is limited in offbeat zones"]
  },
  "kalpa-kinnar": {
    duration: "6 Days / 5 Nights",
    bestTime: "May-June and September-October",
    overview:
      "Kalpa-Kinnaur offers cliffside mountain roads, orchard villages, monasteries, and Kinner Kailash panoramic viewpoints.",
    itinerary: [
      { day: "Day 1", plan: "Delhi-Shimla transfer and halt." },
      { day: "Day 2", plan: "Shimla to Sangla via Sutlej gorge." },
      { day: "Day 3", plan: "Chitkul excursion in border-village belt." },
      { day: "Day 4", plan: "Transfer to Kalpa and Roghi/Suicide Point." },
      { day: "Day 5", plan: "Kinner Kailash sunrise and local market-monastery circuit." },
      { day: "Day 6", plan: "Return transfer toward Shimla/Delhi." }
    ],
    thingsToDo: ["Chitkul border village", "Kamru fort", "Kinnauri shawl shopping", "Kinner Kailash viewpoints"],
    funFacts: ["Kinnauri cap culture is regionally distinct", "Apple orchards dominate local economy"],
    safetyCautions: ["Roads are narrow and landslide-prone", "Permits may be needed near border zones", "Altitude ascent should be gradual"]
  },
  "lahul-spiti": {
    duration: "8 Days / 7 Nights",
    bestTime: "June - September",
    overview:
      "Lahaul-Spiti is a high-altitude cold-desert expedition with monastery heritage, remote villages, and dramatic pass routes.",
    itinerary: [
      { day: "Day 1", plan: "Delhi to Shimla and acclimatization." },
      { day: "Day 2", plan: "Shimla-Narkanda-Rampur-Sarahan." },
      { day: "Day 3", plan: "Sarahan via Sangla-Chitkul to Nako." },
      { day: "Day 4", plan: "Nako to Tabo and cave monastery zone." },
      { day: "Day 5", plan: "Dhankar and Pin Valley exploration." },
      { day: "Day 6", plan: "Kaza with Key Monastery, Kibber, Langza." },
      { day: "Day 7", plan: "Kunzum Pass crossing and Chandratal camp." },
      { day: "Day 8", plan: "Descend via Lahaul to Manali and onward." }
    ],
    thingsToDo: ["Key and Tabo monasteries", "Chandratal lake", "Langza fossil village", "Night-sky stargazing"],
    funFacts: ["Spiti means middle land", "Some manuscripts in local monasteries are over 1000 years old"],
    safetyCautions: ["Only seasonal route (June-September)", "AMS risk is serious", "Fuel and medical access are limited", "Not ideal for heart/lung risk travelers"]
  },
  "goa-explore-india": {
    duration: "5 Days / 4 Nights",
    bestTime: "November - February",
    overview:
      "Goa combines beaches, Portuguese heritage, spice-country tours, and vibrant nightlife into a balanced coastal itinerary.",
    itinerary: [
      { day: "Day 1", plan: "Arrival, North Goa beach and fort sunset." },
      { day: "Day 2", plan: "North Goa beaches, flea market, Aguada, nightlife." },
      { day: "Day 3", plan: "Old Goa churches, Fontainhas, spice plantation." },
      { day: "Day 4", plan: "South Goa Palolem/Agonda and Cabo de Rama." },
      { day: "Day 5", plan: "Leisure shopping and departure." }
    ],
    thingsToDo: ["Beach hopping", "Water sports", "UNESCO church circuit", "Spice plantation lunch"],
    funFacts: ["Goa was under Portuguese rule for over four centuries", "Major share of Indian cashew production"],
    safetyCautions: ["Use caution with self-drive two-wheelers", "Follow beach flag warnings", "Beware of crowded-nightlife pickpocket zones"]
  },
  "benaras-ayodhya": {
    duration: "5 Days / 4 Nights",
    bestTime: "October - March",
    overview:
      "Varanasi-Ayodhya is a deeply spiritual route combining ghat rituals, temple heritage, and cultural old-city experiences.",
    itinerary: [
      { day: "Day 1", plan: "Arrival in Varanasi and Dashashwamedh Ghat aarti." },
      { day: "Day 2", plan: "Sunrise Ganga boat, Kashi Vishwanath, Sarnath." },
      { day: "Day 3", plan: "Ramnagar, old lanes, and Banarasi silk trail." },
      { day: "Day 4", plan: "Drive to Ayodhya, Ram Mandir and Saryu aarti." },
      { day: "Day 5", plan: "Hanuman Garhi/Kanak Bhawan and return." }
    ],
    thingsToDo: ["Ganga Aarti", "Sunrise boat ride", "Ram Mandir visit", "Banarasi food and silk shopping"],
    funFacts: ["Varanasi is among world's oldest continuously lived cities", "Ram Mandir complex is one of India's largest new temple developments"],
    safetyCautions: ["Sensitive ghat zones require respectful behavior", "Old-city lanes are maze-like; guided movement helps", "Use bottled water only"]
  },
  "nainital-corbett": {
    duration: "6 Days / 5 Nights",
    bestTime: "October - June",
    overview:
      "Nainital-Corbett combines scenic lake-town leisure with one of India's most famous tiger-ecosystem safari circuits.",
    itinerary: [
      { day: "Day 1", plan: "Delhi/Kathgodam to Nainital, lake and mall evening." },
      { day: "Day 2", plan: "Snow View, Naina Devi, cave gardens, town circuit." },
      { day: "Day 3", plan: "Mukteshwar day trip and return." },
      { day: "Day 4", plan: "Transfer to Corbett and zone briefing." },
      { day: "Day 5", plan: "Full-day safari in selected Corbett zones." },
      { day: "Day 6", plan: "Optional morning safari and departure." }
    ],
    thingsToDo: ["Naini lake boating", "Mukteshwar viewpoint", "Corbett jeep safari", "Birdwatching"],
    funFacts: ["Corbett is India's oldest national park", "Naini Lake is believed to occupy a crater-like basin"],
    safetyCautions: ["Safari slots need early booking", "Stay inside vehicle during safari", "Peak-season road congestion can be heavy"]
  },
  "delhi-agra": {
    duration: "4 Days / 3 Nights",
    bestTime: "October - March",
    overview:
      "Delhi-Agra is the iconic heritage circuit covering Mughal architecture, old-city food culture, and the Taj Mahal.",
    itinerary: [
      { day: "Day 1", plan: "Arrival in Delhi, India Gate and Connaught Place evening." },
      { day: "Day 2", plan: "Old Delhi plus Humayun's Tomb and Qutub Minar." },
      { day: "Day 3", plan: "Agra transfer, Taj Mahal sunrise window, Agra Fort, Mehtab Bagh." },
      { day: "Day 4", plan: "Fatehpur Sikri and return transfer." }
    ],
    thingsToDo: ["Taj sunrise visit", "Chandni Chowk food walk", "Agra Fort", "Fatehpur Sikri"],
    funFacts: ["Taj Mahal took about 22 years to complete", "Chandni Chowk market tradition goes back centuries"],
    safetyCautions: ["Taj entry has restricted item rules", "Beware unverified guides", "Traffic buffers are essential"]
  },
  "vizag": {
    duration: "4 Days / 3 Nights",
    bestTime: "October - February",
    overview:
      "Vizag offers a rare coast-hills blend with beaches, cave systems, Araku valley routes, and naval heritage attractions.",
    itinerary: [
      { day: "Day 1", plan: "Arrival, RK Beach promenade, INS Kursura submarine museum." },
      { day: "Day 2", plan: "Rishikonda, Borra Caves, and Araku scenic route." },
      { day: "Day 3", plan: "Araku plantations, tribal museum, viewpoints, return." },
      { day: "Day 4", plan: "Simhachalam and Kailasagiri, local craft shopping, departure." }
    ],
    thingsToDo: ["Borra caves", "Araku rail/road journey", "Submarine museum", "Temple and ropeway points"],
    funFacts: ["Vizag hosts India's prominent submarine museum display", "Araku coffee is internationally recognized"],
    safetyCautions: ["Cyclone-prone season needs weather caution", "Ghat roads are slippery in rains", "Respect local tribal photography norms"]
  },
  "sikkim": {
    duration: "6 Days / 5 Nights",
    bestTime: "March-May and October-December",
    overview:
      "Sikkim is an Eastern Himalayan circuit known for mountain monasteries, high-altitude lakes, and scenic pass drives.",
    itinerary: [
      { day: "Day 1", plan: "Arrival and transfer to Gangtok." },
      { day: "Day 2", plan: "Gangtok city and monastery circuit." },
      { day: "Day 3", plan: "High-altitude excursion (permit/weather based)." },
      { day: "Day 4", plan: "Nearby valley route and viewpoints." },
      { day: "Day 5", plan: "Local culture and market day." },
      { day: "Day 6", plan: "Departure transfer." }
    ],
    thingsToDo: ["Monastery visits", "MG Marg", "High-altitude lakes", "Himalayan viewpoints"],
    funFacts: ["Sikkim has one of India's strongest organic farming profiles"],
    safetyCautions: ["Permit zones require documentation", "Altitude pacing is important"]
  },
  "bhutan": {
    duration: "6 Days / 5 Nights",
    bestTime: "March-May and September-November",
    overview:
      "Bhutan offers serene Himalayan valleys, dzong architecture, monastery culture, and a slower highland travel rhythm.",
    itinerary: [
      { day: "Day 1", plan: "Arrival and transfer to first city base." },
      { day: "Day 2", plan: "Thimphu heritage and monastery circuit." },
      { day: "Day 3", plan: "Transfer to Paro valley and local highlights." },
      { day: "Day 4", plan: "Monastery and dzong-focused sightseeing." },
      { day: "Day 5", plan: "Cultural market and local experiences." },
      { day: "Day 6", plan: "Departure transfer." }
    ],
    thingsToDo: ["Dzong visits", "Monastery routes", "Valley viewpoints", "Cultural market walks"],
    funFacts: ["Bhutan measures wellbeing with Gross National Happiness"],
    safetyCautions: ["Carry required travel documents for permits", "Mountain weather can shift rapidly"]
  }
};

export function applyDestinationCatalogOverride(destination) {
  const override = baseOverrides[destination.slug];
  if (!override) return destination;
  return { ...destination, ...override };
}
