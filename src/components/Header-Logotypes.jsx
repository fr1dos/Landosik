import { headerLogotypes } from './Header-Data.jsx'

export function LogoList() {
    return(
        headerLogotypes.map((logo, index) => (
            <div className="scroll-card" key={index}>
                <img className="logotypes-logo" src={logo.logotypesSrc} alt={logo.alt} />
            </div>
        ))
    )
}