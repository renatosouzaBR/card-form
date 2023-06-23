import { SpinnerContainer } from "./styles"

export function Spinner() {
  const pointers = new Array(8).fill('*')

  return (
    <SpinnerContainer>
      {pointers.map((_, index) => <div key={index} />)}
    </SpinnerContainer>
  )
}