import { 
  CVVContent,
  CVVText,
  CardFrontContainer, 
  TextEmpty
} from "./styles";

interface CardFrontProps {
  cvvNumber: string;
}

export function CardBack({ cvvNumber }: CardFrontProps) {
  const filledCVV = (cvvNumber ?? '').padEnd(3, '*')

  return (
    <CardFrontContainer>
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