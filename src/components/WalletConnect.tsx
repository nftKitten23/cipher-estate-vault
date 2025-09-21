import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { CheckCircle } from "lucide-react";

const WalletConnect = () => {
  const { isConnected, address } = useAccount();

  return (
    <div className="flex items-center gap-4">
      {!isConnected ? (
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            authenticationStatus,
            mounted,
          }) => {
            const ready = mounted && authenticationStatus !== 'loading';
            const connected =
              ready &&
              account &&
              chain &&
              (!authenticationStatus ||
                authenticationStatus === 'authenticated');

            return (
              <div
                {...(!ready && {
                  'aria-hidden': true,
                  'style': {
                    opacity: 0,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <button onClick={openConnectModal} type="button" className="btn-blueprint">
                        Connect Wallet
                      </button>
                    );
                  }

                  if (chain.unsupported) {
                    return (
                      <button onClick={openChainModal} type="button" className="btn-glass">
                        Wrong network
                      </button>
                    );
                  }

                  return (
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card">
                        <CheckCircle className="h-5 w-5 text-accent" />
                        <span className="text-sm font-medium">
                          {account.displayName}
                        </span>
                      </div>
                      <button
                        onClick={openAccountModal}
                        type="button"
                        className="btn-glass"
                      >
                        Disconnect
                      </button>
                    </div>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
      ) : (
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card">
            <CheckCircle className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium">
              {address?.slice(0, 6)}...{address?.slice(-4)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletConnect;