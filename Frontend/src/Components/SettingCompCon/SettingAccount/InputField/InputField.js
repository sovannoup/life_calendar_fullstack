import { Container, Input, ErrorText, Label } from "./InputFieldStyle"

export default function InputField(props) {
    const {disable, borderColor, errorText, label} = props
    return (
        <Container>
            <Label>{label}</Label>
            <Input borderColor={borderColor} {...props} disabled={disable} />
            <ErrorText>{errorText}</ErrorText>
        </Container>
        
        
    )
}