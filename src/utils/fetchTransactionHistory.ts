import { Connection, PublicKey } from "@solana/web3.js";

/**
 * Fetches transaction history for the given wallet.
 * 
 * @param walletPublicKey - Public key of the connected wallet.
 * @return An array of transaction details, filtered for token purchases.
 */
export const fetchTransactionHistory = async(walletPublicKey: PublicKey) => {
  try {
    const connection = new Connection("https://api.devnet.solana.com", "confirmed");

    // Fetch confirmed signatures (transaction hashes) for the wallet
    const signatures = await connection.getSignaturesForAddress(walletPublicKey);

    // Fetch the actual transaction details for each signature
    const transactionDetails = await Promise.all(
      signatures.map(async (signatureInfo) => {

        const transaction = await connection.getTransaction(signatureInfo.signature, {
          maxSupportedTransactionVersion: 0,
        });

        return transaction;
      })
    );

    // Filter transactions related to token purchases
    const tokenPurchaseTransactions = transactionDetails.filter((transaction) => {
      return transaction;
    })

    return tokenPurchaseTransactions;
  } catch(error) {
    console.error("Error fetching transaction history: ", error);
    return [];
  }
}