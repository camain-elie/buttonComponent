
const isAValidColor = (strColor) => {
    const s = new Option().style;
    s.color = strColor;
    return s.color !== '';
}

const Button = ({
    text,
    variant,
    disableShadow,
    disabled,
    startIcon,
    endIcon,
    size,
    color,
    focus,
}) => {

    let classList = `button ${variant === 'text' ? 'button--text' : (variant === 'outline' ? 'button--outline' : '')}
        ${startIcon || endIcon ? 'button--icon' : ''}
        ${size ? 'button--' + size : '' }
        ${disableShadow ? 'button--disableShadow' : ''}
        ${disabled ? 'button--disabled' : ''}
        ${focus ? 'button--focus' : ''}`

    let style = {}

    switch (color) {
        case 'default':
 
            break
        case '#E0E0E0':

            break
        case 'primary':
            classList += ` button--primary${focus ? '-focus' : ''}`
            break
        case 'secondary':
            classList += ` button--secondary${focus ? '-focus' : ''}`
            break
        case 'danger':
            classList += ` button--danger${focus ? '-focus' : ''}`
            break
        default :
            if (isAValidColor(color)){
                style.background = color
            }else{
                console.log("An invalid css color has been entered")
            }        
    }

    return (
        <button className={classList} style={style}>
            {startIcon && (<i className="material-icons">{startIcon}</i>)}
            {text}
            {endIcon && (<i className="material-icons">{endIcon}</i>)}
        </button>
    )
}

Button.defaultProps = {
    text: 'Default',
    color: '#E0E0E0',
}

export default Button