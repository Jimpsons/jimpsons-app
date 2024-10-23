import { PhantomProvider } from "./types/phantomTypes";

declare global {
  interface Window{
    solana?: PhantomProvider;
  }
}