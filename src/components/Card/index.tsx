import { CardBack } from "./components/CardBack";
import { CardFront } from "./components/CardFront";

interface CardProps {
  data: {
    cardNumber: string;
    holdersName: string;
    expirationDate: string;
    cvvNumber: string;
  }
}

export function Card({ data }: CardProps) {
  const { cvvNumber, ...rest } = data;

  return <CardFront {...rest} />
  return <CardBack cvvNumber={cvvNumber} />
}