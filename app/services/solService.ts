import { PublicKey } from "@solana/web3.js";
import { Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";

export const airdropSolana = async (walletToken: string, amount: number) => {
  try {
    console.log(
      `Airdrop requested for wallet: ${walletToken} and amount: ${amount}`
    );
    const walletAddress = new PublicKey(walletToken);
    const connection = new Connection("https://api.devnet.solana.com");
  
    const txnHash = await connection.requestAirdrop(
      walletAddress,
      amount * LAMPORTS_PER_SOL
    );
  
    console.log(
      `Airdrop successful for wallet: ${walletToken} and amount: ${amount}`,
      txnHash
    );
  } catch (error: any) {
    alert(error.message);
  }
};
