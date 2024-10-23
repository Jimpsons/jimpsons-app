import { useContext, useEffect, useState, useMemo } from "react";
import { WalletContext } from "../../../context/WalletContext";
import { fetchBalance } from "../../../utils/fetchBalance";
import { fetchTransactionHistory } from "../../../utils/fetchTransactionHistory";
import {
  PublicKey,
  TransactionResponse,
  VersionedTransactionResponse,
} from "@solana/web3.js";

/**
 * WalletInfo component that display the wallet's public key, balance, and transaction history.
 */
const WalletInfo: React.FC = () => {
  const walletConext = useContext(WalletContext);
  const [tokenBalance, setTokenBalance] = useState<number | null>(null);
  const [balanceError, setBalanceError] = useState<string | null>(null);
  const [transactions, setTransactions] = useState<
    (TransactionResponse | VersionedTransactionResponse)[]
  >([]);

  // Memoize the tokenMintAddress to prevent re-creating the object on every render
  const tokenMintAddress = useMemo(
    () => new PublicKey("5eDr7CxYLvvbD31U23hvpjxnurfSUc37JGngVd11zG3x"),
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      if (walletConext?.publicKey && walletConext.isConnected) {
        try {
          // Fetch Balance from Wallet
          const balance = await fetchBalance(
            new PublicKey(walletConext.publicKey),
            tokenMintAddress
          );
          setTokenBalance(balance);
          setBalanceError(null);

          // Fetch transaction history
          const txHistory = await fetchTransactionHistory(
            new PublicKey(walletConext.publicKey)
          );
          const filteredTransactions = txHistory.filter((tx) => tx !== null);
          setTransactions(
            filteredTransactions as VersionedTransactionResponse[]
          );
        } catch (err) {
          console.error("Error fetching wallet data: ", err);
        }
      }
    };

    fetchData();
  }, [walletConext?.publicKey, walletConext?.isConnected, tokenMintAddress]);

  if (!walletConext) {
    return <div>Loading wallet information...</div>;
  }

  const { publicKey, isConnected } = walletConext;

  if (!isConnected) {
    return <div>Wallet not connected.</div>;
  }

  return (
    <div>
      <p>Connected wallet public key: {publicKey}</p>
      <p>
        PJT Token balance:{" "}
        {balanceError ? (
          <p>{balanceError}</p>
        ) : tokenBalance !== null ? (
          tokenBalance === 0 ? (
            "0 PJT (No tokens yet)"
          ) : (
            `${tokenBalance} PJT`
          )
        ) : (
          "Fetching..."
        )}
      </p>

      <hr />
      <h3>Transaction History: </h3>
      {transactions.length === 0 ? (
        <p>No transaction found</p>
      ) : (
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index}>
              Transaction Signature: {transaction?.transaction.signatures[0]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WalletInfo;
