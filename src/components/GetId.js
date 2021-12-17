import { useParams } from "react-router-dom"
import BierDetail from "./BierDetail"

const GetID = () => {
    let { id } = useParams()
    return (
        <div>
            <BierDetail id={id} />
        </div>
    );
}

export default GetID;