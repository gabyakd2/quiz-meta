declare global {
  interface Window {
    ethereum?: {
      request: (args: unknown) => Promise<unknown>;
    };
  }
}

export async function checkAccount() {
  console.log("Checking account...");
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts"
      });
      console.log(accounts)
    } catch (error) {
      console.error("Error connecting")
    }
    console.log("Account found");
  } else {
    console.log("Meta Mask not detected");
  }
}