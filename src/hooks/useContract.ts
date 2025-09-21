import { useContract, useContractWrite, useContractRead } from 'wagmi';
import { useState } from 'react';

// Contract ABI - This would be generated from the compiled contract
const CONTRACT_ABI = [
  {
    "inputs": [
      {"internalType": "address", "name": "_verifier", "type": "address"}
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "internalType": "uint256", "name": "propertyId", "type": "uint256"},
      {"indexed": true, "internalType": "address", "name": "owner", "type": "address"},
      {"indexed": false, "internalType": "string", "name": "location", "type": "string"}
    ],
    "name": "PropertyListed",
    "type": "event"
  },
  {
    "inputs": [
      {"internalType": "string", "name": "_location", "type": "string"},
      {"internalType": "string", "name": "_description", "type": "string"},
      {"internalType": "uint32", "name": "_price", "type": "uint32"},
      {"internalType": "uint32", "name": "_area", "type": "uint32"},
      {"internalType": "uint32", "name": "_bedrooms", "type": "uint32"},
      {"internalType": "uint32", "name": "_bathrooms", "type": "uint32"}
    ],
    "name": "listProperty",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "propertyId", "type": "uint256"},
      {"internalType": "uint32", "name": "amount", "type": "uint32"}
    ],
    "name": "initiateTransaction",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "propertyId", "type": "uint256"}
    ],
    "name": "getPropertyInfo",
    "outputs": [
      {"internalType": "string", "name": "location", "type": "string"},
      {"internalType": "string", "name": "description", "type": "string"},
      {"internalType": "uint32", "name": "price", "type": "uint32"},
      {"internalType": "uint32", "name": "area", "type": "uint32"},
      {"internalType": "uint32", "name": "bedrooms", "type": "uint32"},
      {"internalType": "uint32", "name": "bathrooms", "type": "uint32"},
      {"internalType": "bool", "name": "isAvailable", "type": "bool"},
      {"internalType": "bool", "name": "isVerified", "type": "bool"},
      {"internalType": "address", "name": "owner", "type": "address"},
      {"internalType": "uint256", "name": "timestamp", "type": "uint256"}
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

const CONTRACT_ADDRESS = "0x742d35B2f"; // Replace with actual deployed contract address

export const useCipherEstateVault = () => {
  const contract = useContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
  });

  return contract;
};

export const useListProperty = () => {
  const { write, isLoading, error } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'listProperty',
  });

  return { write, isLoading, error };
};

export const useInitiateTransaction = () => {
  const { write, isLoading, error } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'initiateTransaction',
  });

  return { write, isLoading, error };
};

export const useGetPropertyInfo = (propertyId: number) => {
  const { data, isLoading, error } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getPropertyInfo',
    args: [propertyId],
  });

  return { data, isLoading, error };
};

export const useDepositFunds = () => {
  const { write, isLoading, error } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'depositFunds',
  });

  return { write, isLoading, error };
};

export const useWithdrawFunds = () => {
  const { write, isLoading, error } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'withdrawFunds',
  });

  return { write, isLoading, error };
};

export const useTransferFunds = () => {
  const { write, isLoading, error } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'transferFunds',
  });

  return { write, isLoading, error };
};
