import { useFormContext } from "react-hook-form";
import { z } from "zod";

import { TextField } from "../TextField";
import { CardInputsContainer, CardInputsGroupRow } from "./styles";

export const formSchema = z.object({
  cardNumber: z.string().min(16, 'Informe os 16 números do cartão'),
  holderName: z.string().min(3, 'Informe o nome igual ao que está no cartão'),
  expirationDate: z.string().min(4, 'Informe a data de validate'),
  cvv: z.string().min(3, 'Informe o código de segurança')
})

export type FormType = z.infer<typeof formSchema>

export function CardInputs() {
  const { register, formState: { errors } } = useFormContext<FormType>();

  return (
    <CardInputsContainer>
      <TextField
        id="cardNumber"
        placeholder="**** **** **** ****"
        label="Número do cartão"
        maxLength={19}
        errorMessage={errors.cardNumber?.message}
        {...register('cardNumber')}
      />
      <TextField
        id="ownerName"
        placeholder="Nome como está no cartão"
        label="Nome do titular"
        {...register('holderName')}
        errorMessage={errors.holderName?.message}
      />

      <CardInputsGroupRow>
        <TextField
          id="expiration"
          placeholder="mm/aa"
          label="Validade"
          maxLength={5}
          errorMessage={errors.expirationDate?.message}
          {...register('expirationDate')}
        />
        <TextField
          id="cvv"
          placeholder="***"
          label="CVV"
          onToolTipPress={() => { }}
          style={{ width: '100%' }}
          maxLength={3}
          errorMessage={errors.cvv?.message}
          {...register('cvv')}
        />
      </CardInputsGroupRow>
    </CardInputsContainer>
  )
}