import Web3 from 'web3';

//const web3 = new Web3(window.web3.currentProvider);//from matamask
const web3 = new Web3(window.ethereum);//from matamask

// if (web3) {
//     try {
//       const accounts = window.ethereum.request({ method: 'eth_requestAccounts' });
//       setAccounts(accounts);
//     } catch (error) {
//       if (error.code === 4001) {
//         // User rejected request
//       }
  
//       setError(error);
//     }
//   }

export default web3;
