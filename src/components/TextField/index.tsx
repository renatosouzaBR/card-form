'use client'

import { InputHTMLAttributes, RefObject, forwardRef } from "react";
import { Question, Warning } from '@phosphor-icons/react'

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
  onToolTipPress?: () => void;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextFieldComponent(props, ref) {
  const { colors } = theme;
  const { label, errorMessage, onToolTipPress, ...rest } = props;

  return (
    <TextFieldContainer>
      {!!label &&
        <TextFieldLabelContainer>
          <TextFieldLabel htmlFor={rest.id}>
            {label}
          </TextFieldLabel>

          {!!onToolTipPress &&
            <Question
              size={16}
              color={colors.gray300.toString()}
              weight="fill"
            />
          }
        </TextFieldLabelContainer>
      }

      <TextFieldInput {...rest} error={!!errorMessage} ref={ref} />

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
})