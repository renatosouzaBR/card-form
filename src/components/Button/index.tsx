import { ButtonHTMLAttributes } from "react";

import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isLoading?: boolean;
}

export function Button({ title, isLoading, ...rest }: ButtonProps) {
  return (
    <ButtonContainer {...rest}>{title}</ButtonContainer>
  )
}