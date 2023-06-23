'use client'

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CardInputs, FormType, formSchema } from "@/components/CardInputs";

import { FormFields, HomeContainer } from "./styles";

export default function Home() {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema)
  });

  const { 
    handleSubmit, 
    watch,
    formState: { isSubmitting } 
  } = form;
  
  const cardNumber = watch('cardNumber');
  const holdersName = watch('holderName');
  const expirationDate = watch('expirationDate');
  const cvvNumber = watch('cvv');

  async function handleAddCard() {
    event?.preventDefault();

    await new Promise(resolve => setTimeout(() => {
      resolve(true)
    }, 3000));
  }

  return (
    <HomeContainer>
      <form action="submit" onSubmit={handleSubmit(handleAddCard)}>
        <FormFields>
          <FormProvider {...form}>
            <CardInputs />
          </FormProvider>

          <Card data={{
            cardNumber,
            holdersName,
            expirationDate,
            cvvNumber
          }} />
        </FormFields>

        <Button 
          title="Adicionar cartão" 
          type="submit"
          isLoading={isSubmitting}
        />
      </form>
    </HomeContainer>
  )
}
