export interface CardForm {
  type: 'visa' | 'mastercard';
  name: string;
  surname: string;
  cardNumber: number;
  securityCode: number;
}
