import { HTMLAttributes } from 'react';
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

interface CardFrontProps extends HTMLAttributes<HTMLDivElement> {
  cardNumber: string;
  holdersName: string;
  expirationDate: string;
}

export function CardFront(props: CardFrontProps) {
  const { colors } = theme;
  const { expirationDate, cardNumber, holdersName, ...rest } = props;

  const filledCardNumber = (cardNumber ?? '').padEnd(16, '*');
  const filledExpirationDate = (expirationDate ?? '').replaceAll('/', '').padEnd(4, '*');

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
    <CardContainer {...rest}>
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
            {!holdersName ? 'Seu nome aqui' : holdersName}
          </CardHoldersName>
          
          <CVVContent>
            {filledExpirationDate[0] === '*' ? <TextEmpty /> : filledExpirationDate[0]}
            {filledExpirationDate[1] === '*' ? <TextEmpty /> : filledExpirationDate[1]}
            /
            {filledExpirationDate[2] === '*' ? <TextEmpty /> : filledExpirationDate[2]}
            {filledExpirationDate[3] === '*' ? <TextEmpty /> : filledExpirationDate[3]}
          </CVVContent>
        </div>
      </CardData>
    </CardContainer>
  )
}