// Mock Data

export interface Post {
    id: number ;
    slug: string; // url friendly name 
    title: string;
    brand: string;
    price: string;
    releaseDate: string;
    content: string; // Body of the post 

}


export const posts: Post[] = [
    {
    id: 1 ,
    slug: 'nike-air-max',// url friendly name 
    title: 'NIke Air Max 95',
    brand: 'Nike',
    price: '$180',
    releaseDate: '03-15-2026',
    content: 'The Classic Airmax 95 Lightweight, bold, and built for all-day wear. Available in four colorways at launch ', // Body of the post 
    },

    {
    id: 2,
    slug: 'adidas-yeezy',
    title: 'YE',
    brand: 'Adidas',
    price: '$120',
    releaseDate: '04-01-2026',
    content: 'The Yeezy are light and very comfortable to wear any time ',
    },

    {
    id: 3,
    slug: 'jordan-4-retro-thunder',
    title: 'Jordan 4 Retro Thunder',
    brand: 'Jordan Brand',
    price: '$215',
    releaseDate: '05-10-2026',
    content: 'The Thunder 4 returns with an updated colorway staying true to the OG black and tour yellow palette. One of the most anticipated retros of 2025.',
  },
]