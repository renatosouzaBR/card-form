'use client'

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CardInputs } from "@/components/CardInputs";

import { FormFields, HomeContainer } from "./styles";

export default function Home() {
  function handleSubmit() {
    event?.preventDefault();
  }

  return (
    <HomeContainer>
      <form action="submit" onSubmit={handleSubmit}>
        <FormFields>
          <CardInputs />

          <Card data={{
            cardNumber: '12345678908',
            holdersName: 'Renato Souza',
            expirationDate: '1234',
            cvvNumber: '180'
          }} />
        </FormFields>

        <Button title="Adicionar cartão" type="submit"/>
      </form>
    </HomeContainer>
  )
}
