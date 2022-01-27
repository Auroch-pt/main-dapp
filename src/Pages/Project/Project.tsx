import { useParams } from "react-router-dom";

export const Project = () => {
    const { id } = useParams();

    return (
        <div>
            <h3>Project {id}</h3>
        </div>
    );
};
