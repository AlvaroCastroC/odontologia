import Topo from "../Topo";
import Rodape from "../Rodape";

const EstruturaPaginas = (props) => {
    return(
        <div>
            <Topo />
            {props.children}
            <Rodape />
        </div>
    );

}
export default EstruturaPaginas;