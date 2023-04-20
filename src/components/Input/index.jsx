import { Container } from "./styles";

export function Input({title, ...rest}){
  return(
    <Container  
      type="text"
      placeholder= {title}
    />
  )
}