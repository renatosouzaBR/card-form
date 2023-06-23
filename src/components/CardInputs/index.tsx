import { TextField } from "../TextField";
import { CardInputsContainer, CardInputsGroupRow } from "./styles";

export function CardInputs() {
  return (
    <CardInputsContainer>
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

      <CardInputsGroupRow>
        <TextField
          id="expiration"
          placeholder="mm/aa"
          label="Validade"
        />
        <TextField
          id="cvv"
          placeholder="***"
          label="CVV"
          onToolTipPress={() => { }}
          style={{ width: '100%' }}
        />
      </CardInputsGroupRow>
    </CardInputsContainer>
  )
}