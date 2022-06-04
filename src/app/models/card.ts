export interface Card {
  _id: string;
  number: number;
  ownerId: string;
  owner: string;
  type: 'visa' | 'mastercard';
  amount: number;
}
