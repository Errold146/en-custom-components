import './MyLabel.css'

interface Props {

    /**
     * Text to display 
     */
    label: string

    /**
     * Label size
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3'

    /** 
     * Capitalizer all letters 
    */
    allCasp?: boolean

    /**
     * Lebal color 
     */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary'

    /**
     * Font Color 
     */
    fontColor?: string
}

function MyLabel(
    { 
        label, size = 'normal', 
        allCasp = false, 
        color = 'text-primary', 
        fontColor = '' 
    }: Props ) 
{
    return (
        <span 
            className={`${ size } ${ color } label`}
            style={{ color: fontColor }}
        >
            { allCasp ? label.toUpperCase() : label  }
        </span>
    )
}

export default MyLabel