'use client'

import { InputHTMLAttributes } from "react";
import { Question, Warning } from 'phosphor-react'

import { theme } from "@/styles/stitches.config";

import { 
  TextFieldContainer, 
  TextFieldErrorContainer, 
  TextFieldErrorText, 
  TextFieldInput, 
  TextFieldLabel, 
  TextFieldLabelContainer 
} from "./styles";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

export function TextField({ label, errorMessage, ...rest }: TextFieldProps) {
  const { colors } = theme;

  return (
    <TextFieldContainer>
      {!!label &&
        <TextFieldLabelContainer>
          <TextFieldLabel htmlFor={rest.id}>
            Número do cartão
          </TextFieldLabel>

          <Question 
            size={16} 
            color={colors.gray300.toString()} 
            weight="fill"
          />
        </TextFieldLabelContainer>
      }

      <TextFieldInput {...rest} error={!!errorMessage} />

      {!!errorMessage &&
        <TextFieldErrorContainer>
          <Warning 
            size={16}
            color={colors.statusError.toString()} 
            weight="fill"
          />
          <TextFieldErrorText>{errorMessage}</TextFieldErrorText>
        </TextFieldErrorContainer>
      }
    </TextFieldContainer>
  )
}