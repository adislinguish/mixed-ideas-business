export interface Card {
    id: number;
    value: string;
    suit: '♠' | '♥' | '♦' | '♣' | string;
    faceUp?: boolean;
}

export const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
export const suiteValues = ['♠', '♥', '♦', '♣'];