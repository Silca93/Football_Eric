import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "football.settings")

import django
django.setup()
from home import seed
from home.seed import *
from home.players import *




teams_to_seed = [
        {
            'name': 'G2 Esports',
            'description' : "G2 Esports is a powerhouse European organization known for its dominant League of Legends team. They've won multiple LEC titles and reached the finals of the 2019 World Championship, cementing their status as one of the best teams globally",
            'image': 'https://upload.wikimedia.org/wikipedia/fr/thumb/e/e4/G2_Esports.svg/langfr-390px-G2_Esports.svg.png',
            'country': 'Spain',
            'continent': 'Europe',
        },
        {
            'name': 'Team Liquid',
            'description' : "Team Liquid is a renowned North American esports organization with a strong League of Legends team. They've won multiple LCS championships and have consistently been a top contender at international events, earning respect for their strategic gameplay and talented roster.",
            'image': 'https://upload.wikimedia.org/wikipedia/fr/thumb/f/fe/Team_Liquid.svg/langfr-390px-Team_Liquid.svg.png',
            'country': 'United States',
            'continent': 'North America'
        },
        {
            'name': 'Fnatic',
            'description' : 'Fnatic is a legendary European esports organization, founded in 2004. Their League of Legends team has consistently been one of the best in Europe, winning multiple LEC championships and representing the region at numerous World Championships.',
            'image': 'https://upload.wikimedia.org/wikipedia/fr/thumb/f/f4/Fnatic-Logo-2020.svg/langfr-390px-Fnatic-Logo-2020.svg.png',
            # 'image': 'https://www.thoughtco.com/thmb/OqANUu4U3tNL1Uo2n19uX6PzbM8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/red_kangaroo-24c18ab08dc145f1a798abd4b820390a.jpg',
            'country': 'UK',
            'continent': 'Europe'
        },
      

        {'name': 'Bilibili Gaming',
        'description': 'Bilibili Gaming is a Chinese esports organization that has been performing well in the LPL and has made appearances at international events.',
        'image': 'https://am-a.akamaihd.net/image?resize=400:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1682322954525_Bilibili_Gaming_logo_20211.png',
        'country': 'China',
        'continent': 'Asia'
        },

        {
            'name': 'Top Esports',
            'description': 'Top Esports is a Chinese esports organization that has been a dominant force in the LPL, winning multiple championships and consistently performing well internationally.',
            'image': 'https://am-a.akamaihd.net/image?resize=400:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592592064571_TopEsportsTES-01-FullonDark.png',
            'country': 'China',
            'continent': 'Asia'
        },


        {
            'name': 'T1',
            'description': 'T1 (formerly SK Telecom T1) is a South Korean esports organization and one of the most successful teams in League of Legends history, with multiple world championships.',
            'image': 'https://upload.wikimedia.org/wikipedia/fr/thumb/f/f9/T1_logo.svg/langfr-390px-T1_logo.svg.png',
            'country': 'South Korea',
            'continent': 'Asia'
        },
        {
            'name': 'Gen.G Esports',
            'description': 'Gen.G Esports is a South Korean esports organization with a strong League of Legends team that has won multiple LCK championships and performed well at international events.',
            'image': 'https://am-a.akamaihd.net/image?resize=400:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1655210113163_GenG_logo_200407-05.png',
            'country': 'South Korea',
            'continent': 'Asia'
        },


        {
            'name': 'Cloud9',
            'description': 'Cloud9 is a North American esports organization with a successful League of Legends team that has won multiple LCS championships and consistently performed well at international events.',
            'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Cloud9_logo.svg/langfr-390px-Cloud9_logo.svg.png',
            'country': 'United States',
            'continent': 'North America'
        },


        {
            'name': 'GAM Esports',
            'description': 'GAM Esports is a Vietnamese esports organization with a strong League of Legends team that has consistently dominated the VCS and made appearances at international events.',
            'image': 'https://am-a.akamaihd.net/image?resize=400:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1643263093448_GAMyellow.png',
            'country': 'Vietnam',
            'continent': 'Asia'
        },
        {
            'name': 'LOUD Gaming',
            'description': 'LOUD Gaming is a Brazilian esports organization with a competitive League of Legends team that has been making waves in the VCS.',
            'image': 'https://am-a.akamaihd.net/image?resize=400:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FLogo-LOUD-Esports_Original.png',
            'country': 'Brazil',
            'continent': 'Americas'
        }
        # Add more teams as needed
    ]





players_to_seed = [
    {
        'team': 'G2 Esports',
        'players': [
            {
                'name': 'BrokenBlade',
                'image': 'images/G2_Brokenblade.webp',
                'country': 'Turkey',
                'continent': 'Europe',
                'role': 'Top Laner'
            },
            {
                'name': 'Yike',
                'image': 'images/G2_Yike.webp',
                'country': 'Sweden',
                'continent': 'Europe',
                'role': 'Jungler'
            },
            {
                'name': 'Caps',
                'image': 'images/G2_Caps.webp',
                'country': 'Denmark',
                'continent': 'Europe',
                'role': 'Mid Laner'
            },
            {
                'name': 'Mikyx',
                'image': 'images/G2_Mikyx.webp',
                'country': 'Slovenia',
                'continent': 'Europe',
                'role': 'Support'
            },
            {
                'name': 'Hans Sama',
                'image': 'images/G2_Hans_Sama.webp',
                'country': 'France',
                'continent': 'Europe',
                'role': 'Bot Laner'
            },
        ]
    },
    {
        'team': 'Team Liquid',
        'players': [
            {
                'name': 'Impact',
                'image': 'images/TL_Impact.webp',
                'country': 'South Korea',
                'continent': 'Asia',
                'role': 'Top Laner'
            },
            {
                'name': 'Umti',
                'image': 'images/TL_Umti.webp',
                'country': 'South Korea',
                'continent': 'Asia',
                'role': 'Jungler'
            },
            {
                'name': 'APA',
                'image': 'images/TL_APA.webp',
                'country': 'United States',
                'continent': 'North America',
                'role': 'Mid Laner'
            },
            {
                'name': 'Yeon',
                'image': 'images/TL_Yeon.webp',
                'country': 'United States',
                'continent': 'North America',
                'role': 'Bot Laner'
            },
            {
                'name': 'CoreJJ',
                'image': 'images/TL_CoreJJ.webp',
                'country': 'South Korea',
                'continent': 'Asia',
                'role': 'Support'
            },
        ]
    },
    {
        'team': 'Fnatic',
        'players': [
            {
                'name': 'Oscarinin',
                'image': 'images/FNC_Oscarinin.webp',
                'country': 'Spain',
                'continent': 'Europe',
                'role': 'Top Laner'
            },
            {
                'name': 'Razork',
                'image': 'images/FNC_Razork.webp',
                'country': 'Spain',
                'continent': 'Europe',
                'role': 'Jungler'
            },
            {
                'name': 'Humanoid',
                'image': 'images/FNC_Humanoid.webp',
                'country': 'Czechia',
                'continent': 'Europe',
                'role': 'Mid Laner'
            },
            {
                'name': 'Noah',
                'image': 'images/FNC_Noah.webp',
                'country': 'South Korea',
                'continent': 'Asia',
                'role': 'Bot Laner'
            },
            {
                'name': 'JUN',
                'image': 'images/FNC_Jun.webp',
                'country': 'South Korea',
                'continent': 'Europe',
                'role': 'Support'
            },
        ]
    },
    {
        'team': 'Bilibili Gaming',
        'players': [
            {
                'name': 'Bin',
                'image': 'images/BLG_Bin.webp',
                'country': 'China',
                'continent': 'Asia',
                'role': 'Top Laner'
            },
            {
                'name': 'Xun',
                'image': 'images/BLG_Xun.webp',
                'country': 'China',
                'continent': 'Asia',
                'role': 'Jungler'
            },
            {
                'name': 'Knight',
                'image': 'images/BLG_knight.webp',
                'country': 'China',
                'continent': 'Asia',
                'role': 'Mid Laner'
            },
            {
                'name': 'Elk',
                'image': 'images/BLG_Elk.webp',
                'country': 'China',
                'continent': 'Asia',
                'role': 'Bot Laner'
            },
            {
                'name': 'ON',
                'image': 'images/BLG_ON.webp',
                'country': 'China',
                'continent': 'Asia',
                'role': 'Support'
            },
        ]
    },
    {
        'team': 'Top Esports',
        'players': [
            {
            'name': '369',
            'image': 'images/TES_369.webp',
            'country': 'China',
            'continent': 'Asia',
            'role': 'Top Laner'
            },
            {
            'name': 'Tian',
            'image': 'images/TES_Tian.webp',
            'country': 'China',
            'continent': 'Asia',
            'role': 'Jungler'
            },
            {
            'name': 'Creme',
            'image': 'images/TES_Creme.webp',
            'country': 'China',
            'continent': 'Asia',
            'role': 'Mid Laner'
            },
            {
            'name': 'JackeyLove',
            'image': 'images/TES_JackeyLove.webp',
            'country': 'China',
            'continent': 'Asia',
            'role': 'Bot Laner'
            },
            {
            'name': 'Meiko',
            'image': 'images/TES_Meiko.webp',
            'country': 'China',
            'continent': 'Asia',
            'role': 'Support'
            }
        ]
},
{
        'team': 'T1',
        'players': [
            {
            'name': 'Zeus',
            'image': 'images/T1_Zeus.webp',
            'country': 'South Korea',
            'continent': 'Asia',
            'role': 'Top Laner'
            },
            {
            'name': 'Oner',
            'image': 'images/T1_Oner.webp',
            'country': 'South Korea',
            'continent': 'Asia',
            'role': 'Jungler'
            },
            {
            'name': 'Faker',
            'image': 'images/T1_Faker.webp',
            'country': 'South Korea',
            'continent': 'Asia',
            'role': 'Mid Laner'
            },
            {
            'name': 'Gumayusi',
            'image': 'images/T1_Gumayusi.webp',
            'country': 'South Korea',
            'continent': 'Asia',
            'role': 'Bot Laner'
            },
            {
            'name': 'Keria',
            'image': 'images/T1_Keria.webp',
            'country': 'South Korea',
            'continent': 'Asia',
            'role': 'Support'
            }
    ]
},
{
    'team': 'Gen.G Esports',
    'players': [
            {
            'name': 'Kiin',
            'image': 'images/GEN_Kiin.webp',
            'country': 'South Korea',
            'continent': 'Asia',
            'role': 'Top Laner'
            },
            {
            'name': 'Canyon',
            'image': 'images/GEN_Canyon.webp',
            'country': 'South Korea',
            'continent': 'Asia',
            'role': 'Jungler'
            },
            {
            'name': 'Chovy',
            'image': 'images/GEN_Chovy.webp',
            'country': 'South Korea',
            'continent': 'Asia',
            'role': 'Mid Laner'
            },
            {
            'name': 'Peyz',
            'image': 'images/GEN_Peyz.webp',
            'country': 'South Korea',
            'continent': 'Asia',
            'role': 'Bot Laner'
            },
            {
            'name': 'Lehends',
            'image': 'images/GEN_Lehends.webp',
            'country': 'South Korea',
            'continent': 'Asia',
            'role': 'Support'
            }
]
},
{
    'team': 'GAM Esports',
    'players': [
        {
            'name': 'Kiaya',
            'image': 'images/GAM_Kiaya.webp',
            'country': 'Vietnam',
            'continent': 'Asia',
            'role': 'Top Laner'
        },
        {
            'name': 'Levi',
            'image': 'images/GAM_Levi.webp',
            'country': 'Vietnam',
            'continent': 'Asia',
            'role': 'Jungler'
        },
        {
            'name': 'Emo',
            'image': 'images/GAM_Emo.webp',
            'country': 'Vietnam',
            'continent': 'Asia',
            'role': 'Mid Laner'
        },
        {
            'name': 'EasyLove',
            'image': 'images/GAM_Easylove.webp',
            'country': 'Vietnam',
            'continent': 'Asia',
            'role': 'Bot Laner'
        },
        {
            'name': 'Elio',
            'image': 'images/GAM_Elio.webp',
            'country': 'Vietnam',
            'continent': 'Asia',
            'role': 'Support'
        }
]
},
{
    'team': 'LOUD Gaming',
    'players': [
        {
            'name': 'Robo',
            'image': 'images/LLL_Robo.webp',
            'country': 'Brazil',
            'continent': 'South America',
            'role': 'Top Laner'
        },
        {
            'name': 'Croc',
            'image': 'images/LLL_Croc.webp',
            'country': 'Brazil',
            'continent': 'South America',
            'role': 'Jungler'
        },
        {
            'name': 'Tinowns',
            'image': 'images/LLL_tinowns.webp',
            'country': 'Brazil',
            'continent': 'South America',
            'role': 'Mid Laner'
        },
        {
            'name': 'Route',
            'image': 'images/LLL_Route.webp',
            'country': 'Brazil',
            'continent': 'South America',
            'role': 'Bot Laner'
        },
        {
            'name': 'RedBert',
            'image': 'images/LLL_RedBert.webp',
            'country': 'Brazil',
            'continent': 'South America',
            'role': 'Support'
        }
    ]
},
{
    'team': 'Cloud9',
    'players': [
        {
            'name': 'Fudge',
            'image': 'images/C9_Fudge.webp',
            'country': 'Australia',
            'continent': 'Oceania',
            'role': 'Top Laner'
        },
        {
            'name': 'Blaber',
            'image': 'images/C9_Blaber.webp',
            'country': 'United States',
            'continent': 'North America',
            'role': 'Jungler'
        },
        {
            'name': 'Jojopyun',
            'image': 'images/C9_Jojopyun.webp',
            'country': 'Australia',
            'continent': 'Oceania',
            'role': 'Mid Laner'
        },
        {
            'name': 'Berserker',
            'image': 'images/C9_Berserker.webp',
            'country': 'South Korea',
            'continent': 'Asia',
            'role': 'Bot Laner'
        },
        {
            'name': 'Vulcan',
            'image': 'images/C9_VULCAN.webp',
            'country': 'Canada',
            'continent': 'North America',
            'role': 'Support'
        }
    ]
}
    
]




if __name__== "__main__":
    seed.runPlayers(players_to_seed)