import { HTMLAttributes } from "react";

import { 
  CVVContent,
  CVVText,
  CardFrontContainer, 
  TextEmpty
} from "./styles";

interface CardFrontProps extends HTMLAttributes<HTMLDivElement> {
  cvvNumber: string;
}

export function CardBack({ cvvNumber, ...rest }: CardFrontProps) {
  const filledCVV = (cvvNumber ?? '').padEnd(3, '*')

  return (
    <CardFrontContainer {...rest}>
      <CVVContent>
        <CVVText>
          {filledCVV[0] === "*" ? <TextEmpty /> : filledCVV[0]}
          {filledCVV[1] === "*" ? <TextEmpty /> : filledCVV[1]}
          {filledCVV[2] === "*" ? <TextEmpty /> : filledCVV[2]}
        </CVVText>
        
        <span>CVV</span>
      </CVVContent>

    </CardFrontContainer>
  )
}