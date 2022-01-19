import React, { useState, useEffect } from 'react';
import './referrals.css';
import Web3 from 'web3';
import nftAbi from '../../../config/abi/alien.json'
import { getNftAddress } from '../../../utils/addressHelpers';

const Referrals = () => {
    const [addresses, setAddresses] = useState(null)
    const [fetchStatus, setFetchStaus] = useState(false)
    const nftAddress = getNftAddress();
    let referralData = [];
    let alientContract;

    const web3 = new Web3(window.ethereum);

    const LoadContract = () => {
        if (web3) {
            alientContract = new web3.eth.Contract(nftAbi, nftAddress);
        }
    }

    const getAddressAndCount = async (value) => {
        const fetchAddress = await alientContract.methods._referrers(value).call();
        const rCount = await alientContract.methods._referrals(fetchAddress).call();
        referralData.push({ "address": fetchAddress, "referrals": rCount })
    }

    const FetchAddress = async () => {
        const totalCount = await alientContract.methods._referrersCount().call()
        for (let i = 0; i < totalCount; i++) {
            await getAddressAndCount(i)
        }
        setFetchStaus(true)
        setAddresses(referralData)
    }

    useEffect(() => {
        LoadContract();
        FetchAddress();
    }, [])
    return (
        <div className="container">
            <div className="referral-admin">
                <div className="table">
                    <div className="table-header">
                        <div className="header__item"><a id="name" className="filter__link" href="#">Address</a></div>
                        <div className="header__item"><a id="wins" className="filter__link filter__link--number" href="#">Referrals</a></div>
                    </div>

                    <div className="table-content">
                        {addresses?.map(({ address, referrals }) => (
                            <div className="table-row" key={address} >
                                <div className="table-data">{address}</div>
                                <div className="table-data">{referrals}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Referrals