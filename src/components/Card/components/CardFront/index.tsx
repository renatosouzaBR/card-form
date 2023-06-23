import { ContactlessPayment } from '@phosphor-icons/react'

import { theme } from "@/styles/stitches.config";
import { Brand } from "@/components/Brand";

import { 
  CVVContent, 
  CardContainer, 
  CardData, 
  CardHeader, 
  CardHoldersName, 
  CardNumberContent, 
  CardNumberGroup, 
  CardNumberText, 
  TextEmpty
} from "./styles";

interface CardFrontProps {
  cardNumber: string;
  holdersName: string;
  expirationDate: string;
}

export function CardFront(props: CardFrontProps) {
  const { colors } = theme;
  const { expirationDate, cardNumber, holdersName } = props;

  const filledCardNumber = cardNumber.padEnd(16, '*');
  const filledExpirationDate = expirationDate.padEnd(4, '*');

  function fillCardNumberMask() {
    let groupData: JSX.Element[] = [];
    let groupItems: JSX.Element[] = [];

    for (let i = 0; i < filledCardNumber.length; i++) {
      if (filledCardNumber[i] === '*') {
        groupItems.push(
          <TextEmpty />
        )
      } else {
        groupItems.push(
          <CardNumberText>
            {filledCardNumber[i]}
          </CardNumberText>
        )
      }
      
      if ((i + 1) % 4 === 0) {
        groupData.push(
          <CardNumberGroup>
            {groupItems}
          </CardNumberGroup>
        )
        groupItems = [];
      }
    }

    return groupData;
  }

  return (
    <CardContainer>
      <CardHeader>
        <Brand cardNumber={cardNumber} />
        <ContactlessPayment size={24} color={colors.gray50.toString()} />
      </CardHeader>

      <CardData>
        <CardNumberContent>
          {fillCardNumberMask()}
        </CardNumberContent>

        <div>
          <CardHoldersName empty={!holdersName}>
            {holdersName ?? 'Seu nome aqui'}
          </CardHoldersName>
          
          <CVVContent>
            {filledExpirationDate[0] === '*' ? <TextEmpty /> : expirationDate[0]}
            {filledExpirationDate[1] === '*' ? <TextEmpty /> : expirationDate[1]}
            /
            {filledExpirationDate[2] === '*' ? <TextEmpty /> : expirationDate[2]}
            {filledExpirationDate[3] === '*' ? <TextEmpty /> : expirationDate[3]}
          </CVVContent>
        </div>
      </CardData>
    </CardContainer>
  )
}