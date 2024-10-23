// Declare types for Phantom's request parameters and response
interface PhantomRequestArgs {
  method: "connect" | "disconnect" | "signTransaction";
  params?: {
    onlyIfTrusted?: boolean;
    transaction?: string;
  }
}

// Response structure of the Phatom wallet
export interface PhantomResponse {
  publicKey: string;
}

// Phantom Provider interface (*structure of the Phantom Provider)
export interface PhantomProvider {
  isPhantom: boolean;
  request: (args: PhantomRequestArgs) => Promise<PhantomResponse>
  disconnect: () => Promise<void>
  on: (event: string, handler: (publicKey: string | null) => void) => void
}