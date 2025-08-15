export interface WeddingDress {
    id: number;
    designerName: string;
    description: string;
    date: Date;
}

export const weddignDresses = [
    {
        id: 1,
        designerName: 'Lillian West',
        description: 'Sexy, effortless and off-beat bridal dresses for the whimsical bride',
        date: new Date()
    },
    {
        id: 2,
        designerName: 'Justin Alexander',
        description: 'Classic, refined and timeless wedding dresses with a touch of Old Hollywood glamour',
        date: new Date()
    },
    {
        designerName: 'Blush Bridal',
        description: 'Graceful and romantic bridal gowns for the classic princess bride',
        date: new Date()
    },
];