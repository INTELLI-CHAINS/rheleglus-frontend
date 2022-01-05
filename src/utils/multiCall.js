import React from 'react';
import Web3 from 'web3';
import MultiCallAbi from '../config/abi/multicall.json'
import { Interface } from '@ethersproject/abi';
import { RPC } from './constants'

const MultiCall = async (abi, calls) => {
    const web3 = new Web3(RPC);
    const multi = new web3.eth.Contract(
        MultiCallAbi.abi,
        "0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821"
    );
    const itf = new Interface(abi);

    const calldata = calls.map((call) => [
        call.address.toLowerCase(),
        itf.encodeFunctionData(call.name, call.params),
    ]);
    const { returnData } = await multi.methods.aggregate(calldata).call();
    const res = returnData.map((call, i) =>
        itf.decodeFunctionResult(calls[i].name, call)
    );

    return res;
};


export default MultiCall;