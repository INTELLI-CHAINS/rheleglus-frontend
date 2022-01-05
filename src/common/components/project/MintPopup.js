import React, { useState, useEffect } from 'react';
import 'assets/styles/components/project/mintPopup.scss'
import ObliqueButton from '../common/ObliqueButton';
import { injected } from 'connectors';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { setupNetwork } from 'utils/wallet';
import { getNftAddress } from 'utils/addressHelpers';
import Web3 from 'web3';
import alienAbi from '../../../config/abi/alien.json'
import { useLocation } from 'react-router-dom'
import BigNumber from 'bignumber.js';
import MultiCall from 'utils/multiCall';
import nftAbi from '../../../config/abi/alien.json'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { parseBytes32String } from 'ethers/lib/utils';
toast.configure();



const MintPopup = ({ isOpen, setIsOpen }) => {
    const location = useLocation();
    const { host } = window.location;
    const [mintAmount, setmintAmount] = useState(8);
    const { activate, account } = useWeb3React();
    const nftAddress = getNftAddress();
    const [ercData, setErcData] = useState();
    const [presaleMessage, setPresalesMessage] = useState('');
    const [isPresaleStart, setIsPresaleStart] = useState(true);
    const [isPresaleEnd, setIsPresaleEnd] = useState(false);
    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(alienAbi, nftAddress);


    const createMint = async () => {
        const totalPrice = await contract.methods.getNFTPriceForETH(mintAmount).call();
        const refAddress = localStorage.getItem('refAddress');

        const { presaleCount, endPresaleCount } = ercData;

        if ((presaleCount + mintAmount) < endPresaleCount) {
            await contract
            .methods
            .mintNFTPresale(mintAmount, refAddress)
            .send({ from: account, value: totalPrice })
            .once("recepient", (recepient) => {
                window.alert("nft minted successfully");
            })
            .on("error", () => {
                window.alert("mint failed");
            });
        } else {
            toast.error("Exceeds MAX_NFT_SUPPLY of presale")
        }

       
    }

    const handleInputChange = (e) => {
        setmintAmount(e.target.value > 0 && e.target.value <= 20 ? e.target.value : "");
        if (e.target.value > 20) {
            alert('You can mint maximum 20 tokens at a time')
        } else {
            console.log('mint error')
        }
    }

    const connectMetamask = async () => {
        try {
            await activate(injected, async (error) => {
                if (error instanceof UnsupportedChainIdError) {
                    const hasSetup = await setupNetwork();
                    if (hasSetup) {
                        activate(injected);
                    }
                }
            });
        } catch (error) {
            console.error(error);
        }
    }

    const saveRefAddress = () => {
        const refAddress = location.search.split('=')[1]
        const refAddressLocal = refAddress ? refAddress : '0x0000000000000000000000000000000000000000'
        localStorage.setItem('refAddress', refAddressLocal)
    }

    const copyText = (entryText) => {
        navigator.clipboard.writeText(entryText);
    }

    const getDateFromTimestamp = (timestamp) => {
        let date = new Date(parseInt(timestamp * 1000))
        const currentDate = date.getDate();
        const currentMonth = date.getMonth();
        const currentYear = date.getFullYear();
        return (
            `${currentDate < 10 ? `0${currentDate}` : currentDate}/
            ${currentMonth < 10 ? `0${currentMonth + 1}` : currentMonth + 1}/
            ${currentYear}`
        )
    }


    const ErcMultiCalls = async () => {

        const currentTimestamp = Date.now() / 1000;
        const erccall = [
            { address: nftAddress, name: "SALE_START_TIMESTAMP_PRESALE" },
            { address: nftAddress, name: "SALE_END_TIMESTAMP_PRESALE" },
            { address: nftAddress, name: "presaleCount" },
            { address: nftAddress, name: "endPresaleCount" },
            { address: nftAddress, name: "seedCount" },
            { address: nftAddress, name: "_referrals", params: [account] },
        ];
        let [
            SALE_START_TIMESTAMP_PRESALE,
            SALE_END_TIMESTAMP_PRESALE,
            presaleCount,
            endPresaleCount,
            seedCount,
            _referrals
        ] = await MultiCall(nftAbi, erccall);

        SALE_START_TIMESTAMP_PRESALE = new BigNumber(parseInt(SALE_START_TIMESTAMP_PRESALE)).toFixed(2);
        SALE_END_TIMESTAMP_PRESALE = new BigNumber(parseInt(SALE_END_TIMESTAMP_PRESALE)).toFixed(2);
        presaleCount = new BigNumber(parseInt(presaleCount)).toFixed(2);
        endPresaleCount = new BigNumber(parseInt(endPresaleCount)).toFixed(2);
        seedCount = new BigNumber(parseInt(seedCount)).toFixed(0);
        _referrals = new BigNumber(parseInt(_referrals)).toFixed(0);

        setErcData({
            SALE_START_TIMESTAMP_PRESALE,
            SALE_END_TIMESTAMP_PRESALE,
            presaleCount,
            endPresaleCount,
            seedCount,
            _referrals
        })

        if (currentTimestamp < SALE_START_TIMESTAMP_PRESALE) {
            setIsPresaleStart(false)
            setPresalesMessage('Minting time not yet')
        }
        if (currentTimestamp > SALE_END_TIMESTAMP_PRESALE) {
            setIsPresaleEnd(true)
            setPresalesMessage('Minting time finished')
        }
    }

    const claimSeed = async () => {
        await contract
            .methods
            .seedClaim()
            .send({ from: account })
            .once("recepient", (recepient) => {
                window.alert("Seed claimed");
            })
            .on("error", () => {
                window.alert("Seed failed");
            });
    }

    const claimReferral = async () => {
        alert('claim later')
    }

    useEffect(() => {
        saveRefAddress()
        connectMetamask()
        if (account) {
            ErcMultiCalls();
        }
    }, [account])

    return (
        <div className={`mintPopup ${isOpen ? 'active' : ''}`} >
            <div className="mintPopup__close">
                <button className="mintPopup__close-button" onClick={() => setIsOpen(false)} />
            </div>
            <div className="mintPopup__content">
                <div className="sale__info">
                    <div className="value">
                        Presale_Start:
                        <span>
                            {isPresaleStart ? getDateFromTimestamp(ercData?.SALE_START_TIMESTAMP_PRESALE) : presaleMessage}
                        </span>
                    </div>
                    <div className="value">
                        Presale_End: {!isPresaleEnd ? getDateFromTimestamp(ercData?.SALE_END_TIMESTAMP_PRESALE) : presaleMessage}
                    </div>
                    {parseInt(ercData?.seedCount) ?
                        <div className="value">
                            SeedCount: {parseInt(ercData.seedCount)} </div> : null
                    }
                    {parseInt(ercData?._referrals) ?
                        <div className="value">
                            ReferralCount: {parseInt(ercData._referrals)} </div> : null
                    }

                </div>
                <div className="mint__inputs">
                    {account ?
                        <>
                            {!parseInt(ercData?.seedCount) && isPresaleStart && !isPresaleEnd ?
                                <>
                                    <input
                                        type="number"
                                        name='mintamount'
                                        value={mintAmount}
                                        onChange={handleInputChange}
                                    />
                                    <ObliqueButton text={'Mint Now'} onClick={createMint} />
                                </> : null
                            }
                            <>
                                {parseInt(ercData?.seedCount) ?
                                    <ObliqueButton text={'Claim Seed'} onClick={claimSeed} /> : null
                                }
                                <div className="mint__inputs__row">
                                    <ObliqueButton text={'Copy Referral Link'} onClick={() => copyText(`${host}/?ref=${account}`)} />
                                   {parseInt(ercData?._referrals) ?  <ObliqueButton text={'Claim RefAmount'} onClick={claimReferral} /> : null}
                                </div>
                            </>
                        </> :
                        <ObliqueButton text={'Connect Metamask'} onClick={connectMetamask} />
                    }

                </div>
            </div>
        </div >
    )
}

export default MintPopup
