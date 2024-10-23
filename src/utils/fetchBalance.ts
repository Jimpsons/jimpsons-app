import { Connection, PublicKey } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";

/**
 * Fetch the balance of the PJT token for the given wallet.
 *
 * @param walletPublicKey - The public key of the connected wallet.
 * @param tokenMintAddress - The mint address of the SPL token (PJT token).
 * @returns The token balance for the specified wallet.
 */
export const fetchBalance = async (
  walletPublicKey: PublicKey,
  tokenMintAddress: PublicKey
): Promise<number | null> => {
  try {
    // Connect to the solona Devnet
    const connection = new Connection(
      "https://api.devnet.solana.com",
      "confirmed"
    );

    // Find all token account owned by the wallet
    const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
      walletPublicKey,
      {
        programId: TOKEN_PROGRAM_ID,
      }
    );

    // Find the specific token account for out token
    const tokenAccount = tokenAccounts.value.find(
      (account) =>
        account.account.data.parsed.info.mint === tokenMintAddress.toString()
    );

    if (tokenAccount) {
      const balance =
        tokenAccount.account.data.parsed.info.tokenAmount.uiAmount;
      return balance;
    } else {
      return 0;
    }
  } catch (error) {
    console.error("Error fetching token balance: ", error);
    return null;
  }
};
