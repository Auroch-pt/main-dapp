import { WalletBalance } from "../../components/WalletBalance/WalletBalance";
import { useAuth } from "../../contexts/auth";
import { useGetUserQuery } from "../../graphql/graphql";
export const Profile = () => {
  const { walletAccount, handleDisconnect } = useAuth();
  const { data, loading, error } = useGetUserQuery({
    variables: { address: walletAccount },
  });

  if (error) {
    return <div>Error</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>address: {data.user.address}</h1>
      <p>nickname: {data.user.nickname}</p>
      <p>created at: {data.user.createdAt}</p>
      <p>updated at: {data.user.updatedAt}</p>
      <button onClick={handleDisconnect}>Disconnect</button>
      <WalletBalance />
    </div>
  );
};
