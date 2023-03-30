import { useContext } from "react";
import { PersonContext } from "../contexts/PersonContextProvider";

export default function ImcView(props) {

    const {className} = props;
    const { person } = useContext(PersonContext);

    return (
        <div className={className}>
            Seu IMC &eacute; <span>{person.imc}</span>
            <strong>({person.imcDescription})</strong>
        </div>
    )
}