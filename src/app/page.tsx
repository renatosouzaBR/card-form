'use client'

import { Button } from "@/components/Button";
import { TextField } from "@/components/TextField";

import { HomeContainer, InputsContainer, InputsGroupRow } from "./styles";

export default function Home() {
  function handleSubmit() {
    event?.preventDefault();
  }

  return (
    <HomeContainer>
      <form action="submit" onSubmit={handleSubmit}>
        <InputsContainer>
          <TextField 
            id="cardNumber"
            placeholder="**** **** **** ****" 
            label="Número do cartão"
          />
          <TextField 
            id="ownerName"
            placeholder="Nome como está no cartão" 
            label="Nome do titular"
          />

          <InputsGroupRow>
            <TextField 
              id="expiration"
              placeholder="mm/aa" 
              label="Validade"
            />
            <TextField 
              id="cvv"
              placeholder="***" 
              label="CVV"
              onToolTipPress={() => {}}
            />
          </InputsGroupRow>
        </InputsContainer>

        <Button title="Adicionar cartão" type="submit"/>
      </form>
    </HomeContainer>
  )
}
