import { FiberManualRecord, Info } from '@material-ui/icons'
import './styles.css'

export const Widgets = () => {
    const Articulos = (title, subtitle ) => {
        return (
            <div className="widgets__article">
               <div className="widgets__left">
               <FiberManualRecord/>
                   <div className="widgets__right">
                       <h4>{title}</h4>
                       <p>{subtitle}</p>
                   </div>
               </div>
            </div>
        )
    }
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Lo mas visto de hoy en linkedln</h2>
                <Info/>
            </div>
            {Articulos("json Dev", "Videos nuevos en youtube de React")}
            {Articulos("json Dev", "Videos nuevos en youtube de React")}
            {Articulos("json Dev", "Videos nuevos en youtube de React")}
            {Articulos("json Dev", "Videos nuevos en youtube de React")}
        </div>
    )
}
