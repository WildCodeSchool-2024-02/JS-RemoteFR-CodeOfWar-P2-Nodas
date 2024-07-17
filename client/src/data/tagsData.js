const tagsData = [
  {
    id: 31,
    name: 'Singleplayer',
    slug: 'singleplayer',
    games_count: 224780,
    image_background: 'https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg',
    tagType: 'playernumber'
  },
  {
    id: 7,
    name: 'Multiplayer',
    slug: 'multiplayer',
    games_count: 38215,
    image_background: 'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
    tagType: 'playernumber'
  },
  {
    id: 18,
    name: 'Co-op',
    slug: 'co-op',
    games_count: 11708,
    image_background: 'https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg',
    tagType: 'playernumber'
  },
  {
    id: 118,
    name: 'Story Rich',
    slug: 'story-rich',
    games_count: 21847,
    image_background: 'https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg',
    tagType: 'gameplayfeature'
  },
  {
    id: 36,
    name: 'Open World',
    slug: 'open-world',
    games_count: 7569,
    image_background: 'https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg',
    tagType: 'gameplayfeature'
  },
  {
    id: 411,
    name: 'cooperative',
    slug: 'cooperative',
    games_count: 5050,
    image_background: 'https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg',
    tagType: 'playernumber'
  },
  {
    id: 8,
    name: 'First-Person',
    slug: 'first-person',
    games_count: 31926,
    image_background: 'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
    tagType: 'gamingview'
  },
  {
    id: 45,
    name: '2D',
    slug: '2d',
    games_count: 195919,
    image_background: 'https://media.rawg.io/media/games/f90/f90ee1a4239247a822771c40488e68c5.jpg',
    tagType: 'gamingview'
  },
  {
    id: 149,
    name: 'Third Person',
    slug: 'third-person',
    games_count: 11650,
    image_background: 'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
    tagType: 'gamingview'
  },
  {
    id: 32,
    name: 'Sci-fi',
    slug: 'sci-fi',
    games_count: 19287,
    image_background: 'https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg',
    tagType: 'theme'
  },
  {
    id: 16,
    name: 'Horror',
    slug: 'horror',
    games_count: 44567,
    image_background: 'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
    tagType: 'theme'
  },
  {
    id: 9,
    name: 'Online Co-Op',
    slug: 'online-co-op',
    games_count: 5674,
    image_background: 'https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg',
    tagType: 'playernumber'
  },
  {
    id: 64,
    name: 'Fantasy',
    slug: 'fantasy',
    games_count: 28007,
    image_background: 'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
    tagType: 'theme'
  },
  {
    id: 26,
    name: 'Gore',
    slug: 'gore',
    games_count: 5748,
    image_background: 'https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg',
    tagType: 'theme'
  },
  {
    id: 6,
    name: 'Exploration',
    slug: 'exploration',
    games_count: 23313,
    image_background: 'https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg',
    tagType: 'gameplayfeature'
  },
  {
    id: 193,
    name: 'Classic',
    slug: 'classic',
    games_count: 1794,
    image_background: 'https://media.rawg.io/media/games/e1f/e1ffbeb1bac25b19749ad285ca29e158.jpg',
    tagType: 'theme'
  },
  {
    id: 37,
    name: 'Sandbox',
    slug: 'sandbox',
    games_count: 6998,
    image_background: 'https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg',
    tagType: 'gameplayfeature'
  },
  {
    id: 1,
    name: 'Survival',
    slug: 'survival',
    games_count: 8832,
    image_background: 'https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg',
    tagType: 'gameplayfeature'
  },
  {
    id: 123,
    name: 'Comedy',
    slug: 'comedy',
    games_count: 12535,
    image_background: 'https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg',
    tagType: 'theme'
  },
  {
    id: 34,
    name: 'Violent',
    slug: 'violent',
    games_count: 6728,
    image_background: 'https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg',
    tagType: 'theme'
  },
  {
    id: 397,
    name: 'Online multiplayer',
    slug: 'online-multiplayer',
    games_count: 3805,
    image_background: 'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
    tagType: 'playernumber'
  },
  {
    id: 198,
    name: 'Split Screen',
    slug: 'split-screen',
    games_count: 6734,
    image_background: 'https://media.rawg.io/media/games/3be/3be0e624424d3453005019799a760af2.jpg',
    tagType: 'playernumber'
  },
  {
    id: 15,
    name: 'Stealth',
    slug: 'stealth',
    games_count: 6320,
    image_background: 'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
    tagType: 'gameplayfeature'
  },
  {
    id: 75,
    name: 'Local Co-Op',
    slug: 'local-co-op',
    games_count: 5442,
    image_background: 'https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg',
    tagType: 'playernumber'
  },
  {
    id: 122,
    name: 'Pixel Graphics',
    slug: 'pixel-graphics',
    games_count: 93824,
    image_background: 'https://media.rawg.io/media/games/501/501e7019925a3c692bf1c8062f07abe6.jpg',
    tagType: 'gamingview'
  },
  {
    id: 80,
    name: 'Tactical',
    slug: 'tactical',
    games_count: 5166,
    image_background: 'https://media.rawg.io/media/games/9af/9af24c1886e2c7b52a4a2c65aa874638.jpg',
    tagType: 'theme'
  },
  {
    id: 72,
    name: 'Local Multiplayer',
    slug: 'local-multiplayer',
    games_count: 13191,
    image_background: 'https://media.rawg.io/media/games/a92/a92272ea5cfc35b8ad6317fbd81ce0f6.jpg',
    tagType: 'playernumber'
  },
  {
    id: 150,
    name: 'Third-Person Shooter',
    slug: 'third-person-shooter',
    games_count: 3464,
    image_background: 'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
    tagType: 'gamingview'
  },
  {
    id: 74,
    name: 'Retro',
    slug: 'retro',
    games_count: 41683,
    image_background: 'https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg',
    tagType: 'theme'
  },
  {
    id: 41,
    name: 'Dark',
    slug: 'dark',
    games_count: 15857,
    image_background: 'https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg',
    tagType: 'theme'
  },
  {
    id: 134,
    name: 'Anime',
    slug: 'anime',
    games_count: 13545,
    image_background: 'https://media.rawg.io/media/screenshots/6d3/6d367773c06886535620f2d7fb1cb866.jpg',
    tagType: 'theme'
  },
  {
    id: 25,
    name: 'Space',
    slug: 'space',
    games_count: 42893,
    image_background: 'https://media.rawg.io/media/games/08b/08b2eee52a9876a48b955e5149affe5b.jpg',
    tagType: 'theme'
  },
  {
    id: 63,
    name: 'Zombies',
    slug: 'zombies',
    games_count: 10327,
    image_background: 'https://media.rawg.io/media/games/fee/fee0100afd87b52bfbd33e26689fa26c.jpg',
    tagType: 'theme'
  },
  {
    id: 70,
    name: 'War',
    slug: 'war',
    games_count: 9335,
    image_background: 'https://media.rawg.io/media/games/ac7/ac7b8327343da12c971cfc418f390a11.jpg',
    tagType: 'theme'
  },
  {
    id: 102,
    name: 'Turn-Based',
    slug: 'turn-based',
    games_count: 5352,
    image_background: 'https://media.rawg.io/media/games/218/218167ff4011acc825c844d0070940a0.jpg',
    tagType: 'gameplayfeature'
  },
  {
    id: 121,
    name: 'Character Customization',
    slug: 'character-customization',
    games_count: 4775,
    image_background: 'https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg',
    tagType: 'gameplayfeature'
  },
  {
    id: 43,
    name: 'Post-apocalyptic',
    slug: 'post-apocalyptic',
    games_count: 4000,
    image_background: 'https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg',
    tagType: 'theme'
  },
  {
    id: 17,
    name: 'Survival Horror',
    slug: 'survival-horror',
    games_count: 8504,
    image_background: 'https://media.rawg.io/media/games/1be/1be575aa6de86de328433a63fb534d9a.jpg',
    tagType: 'theme'
  },
  {
    id: 88,
    name: 'Cute',
    slug: 'cute',
    games_count: 33626,
    image_background: 'https://media.rawg.io/media/screenshots/dc2/dc2814dc50d61be1ea4fcd5d3c03ddb6.jpg',
    tagType: 'theme'
  },
  {
    id: 145,
    name: 'Choices Matter',
    slug: 'choices-matter',
    games_count: 5503,
    image_background: 'https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg',
    tagType: 'gameplayfeature'
  },
  {
    id: 113,
    name: 'Side Scroller',
    slug: 'side-scroller',
    games_count: 10575,
    image_background: 'https://media.rawg.io/media/games/85c/85c8ae70e7cdf0105f06ef6bdce63b8b.jpg',
    tagType: 'gamingview'
  },
  {
    id: 125,
    name: 'Crafting',
    slug: 'crafting',
    games_count: 4229,
    image_background: 'https://media.rawg.io/media/games/f3e/f3eec35c6218dcfd93a537751e6bfa61.jpg',
    tagType: 'gameplayfeature'
  },
  {
    id: 114,
    name: 'Physics',
    slug: 'physics',
    games_count: 19334,
    image_background: 'https://media.rawg.io/media/screenshots/eef/eef872fddedf40e6d2236bb981725cc6.jpg',
    tagType: 'gameplayfeature'
  },
  {
    id: 89,
    name: 'Historical',
    slug: 'historical',
    games_count: 3219,
    image_background: 'https://media.rawg.io/media/games/997/997ab4d67e96fb20a4092383477d4463.jpg',
    tagType: 'theme'
  },
  {
    id: 40,
    name: 'Dark Fantasy',
    slug: 'dark-fantasy',
    games_count: 4247,
    image_background: 'https://media.rawg.io/media/games/cd7/cd78e63236e86f97f4b2e45f3843eb3d.jpg',
    tagType: 'theme'
  },
  {
    id: 77,
    name: 'Realistic',
    slug: 'realistic',
    games_count: 5957,
    image_background: 'https://media.rawg.io/media/games/106/1069e754e7e6012b0cf42b4b04704792.jpg',
    tagType: 'theme'
  },
  {
    id: 110,
    name: 'Cinematic',
    slug: 'cinematic',
    games_count: 2196,
    image_background: 'https://media.rawg.io/media/games/a79/a79d2fc90c4dbf07a8580b19600fd61d.jpg',
    tagType: 'theme'
  },
  {
    id: 11,
    name: 'Team-Based',
    slug: 'team-based',
    games_count: 1612,
    image_background: 'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
    tagType: 'playernumber'
  },
  {
    id: 167,
    name: 'Futuristic',
    slug: 'futuristic',
    games_count: 5447,
    image_background: 'https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg',
    tagType: 'theme'
  },
  {
    id: 571,
    name: '3D',
    slug: '3d',
    games_count: 83857,
    image_background: 'https://media.rawg.io/media/games/91d/91ddeef8d5ebee7f21faa89efa0f2201.jpg',
    tagType: 'gamingview'
  },
  {
    id: 639,
    name: 'Roguelike',
    slug: 'roguelike',
    games_count: 12737,
    image_background: 'https://media.rawg.io/media/games/fd9/fd92f105dcd6491bc5d61135033d1f19.jpg',
    tagType: 'gameplayfeature'
  },
  {
    id: 99,
    name: 'Isometric',
    slug: 'isometric',
    games_count: 4498,
    image_background: 'https://media.rawg.io/media/games/33d/33df5a032898b8ab7e3773c7a5f1d336.jpg',
    tagType: 'gamingview'
  },
  {
    id: 172,
    name: 'Aliens',
    slug: 'aliens',
    games_count: 6803,
    image_background: 'https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg',
    tagType: 'theme'
  },
  {
    id: 66,
    name: 'Medieval',
    slug: 'medieval',
    games_count: 6487,
    image_background: 'https://media.rawg.io/media/games/193/19390fa5e75e9048b22c9a736cf9992f.jpg',
    tagType: 'theme'
  },
  {
    id: 33,
    name: 'VR',
    slug: 'vr',
    games_count: 12400,
    image_background: 'https://media.rawg.io/media/games/f86/f869253c68b38fa789f58cc5be2cb996.jpg',
    tagType: 'gamingview'
  },
  {
    id: 39,
    name: 'Building',
    slug: 'building',
    games_count: 6197,
    image_background: 'https://media.rawg.io/media/games/6d9/6d92d50affeebf2eb3894d178eb1117e.jpg',
    tagType: 'gameplayfeature'
  },
  {
    id: 101,
    name: 'Turn-Based Strategy',
    slug: 'turn-based-strategy',
    games_count: 5225,
    image_background: 'https://media.rawg.io/media/games/054/0549f1a0a5e782d4e81cdf8d022073fa.jpg',
    tagType: 'gameplayfeature'
  },
]

export default tagsData