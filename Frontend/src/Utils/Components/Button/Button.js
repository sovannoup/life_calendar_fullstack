import PropTypes from 'prop-types'
import { ButtonComp } from "./ButtonStyle";

export default function Button(props){
    const {label='Button', size='md', textColor, disabled=false, onClick, noBorder=false} = props
    return <ButtonComp  size={size} textColor={textColor} noBorder={noBorder} disabled={disabled} onClick={onClick} {...props}>{label}</ButtonComp>
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    disabled: PropTypes.bool,
    noBorder: PropTypes.bool,
    onClick: PropTypes.func,

}