import { ethers } from "ethers";
import identiFi from './IdentiFi.json'

export const contract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    //checks if any wallet like metamask is installed or not
    const {ethereum} = window;
    if(ethereum) {
        const signer = provider.getSigner();
        const contractReader = new ethers.Contract(
            '0xC921F3958695D924B5DaC5681E65Fbf9Bbf72E4d', 
            identiFi.abi, 
            signer);
        return contractReader;
    }
};