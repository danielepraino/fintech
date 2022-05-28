export interface Card {
  id: string;
  number: number;
  ownerId: string;
  owner: string;
  type: 'visa' | 'mastercard';
  amount: number;
}
