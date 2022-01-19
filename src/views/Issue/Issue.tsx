import { useParams } from "react-router-dom";

export const Issue = () => {
  const { issueId } = useParams();

  return <div>{issueId}</div>;
};
