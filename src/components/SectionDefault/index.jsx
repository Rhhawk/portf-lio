import { StyleSectionDefault } from './styles'


function SubSections({ children, ...props  }){

    return(
        <StyleSectionDefault {...props}>{children}</StyleSectionDefault>
    )
}


export default SubSections