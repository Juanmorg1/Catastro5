export function Lista_Predios(){
    const listado = JSON.parse(localStorage.getItem("predio")) || [];
    console.log(listado);
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th scope="col">Código del Predio</th>
                    <th scope="col">Nombre Propietario</th>
                    <th scope="col">Documento del Propietario</th>
                    <th scope="col">Área Total</th>
                    <th scope="col">Área Construida</th>
                    <th scope="col">Barrio Predio</th>
                    <th scope="col">Dirección Predio</th>
                </tr>
            </thead>
            <tbody>
                {listado.map( x =>
                <tr>
                    <td>{x.codpre}</td>
                    <td>{x.nompro}</td>
                    <td>{x.docpro}</td>
                    <td>{x.areat}</td>
                    <td>{x.areac}</td>
                    <td>{x.barrio}</td>
                    <td>{x.direc}</td>
                </tr>)}
            </tbody>
        </table>
        
        </>
    );
}