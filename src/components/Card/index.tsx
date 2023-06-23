import { useState } from "react";
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
  const [showCardBack, setShowCardBack] = useState(false);

  function handleChangeCardSide() {
    setShowCardBack(state => !state)
  }

  if (showCardBack) {
    return <CardBack cvvNumber={cvvNumber} onClick={handleChangeCardSide} />
  }

  return <CardFront {...rest} onClick={handleChangeCardSide} />
}