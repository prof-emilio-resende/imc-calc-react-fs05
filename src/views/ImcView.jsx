export default function ImcView(props) {

    const {person, className} = props;

    return (
        <div className={className}>
            Seu IMC &eacute; <span>{person.imc}</span>
            <strong>({person.imcDescription})</strong>
        </div>
    )
}