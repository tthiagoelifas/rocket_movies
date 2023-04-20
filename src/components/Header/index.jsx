import { Container } from "./styles";
import { TitlePink } from "../TitlePink";
import { Input } from "../Input";

export function Header(){
  return(
    <Container>
     <TitlePink />
     <Input title="Pesquisar pelo título"/>
     
    </Container>
  )
}