import Web3 from'web3';

export default async function ({store}, inject) {
  let web3;
  if (window.ethereum) {
    web3 = new Web3 (window.ethereum);
    await ethereum.enable ();
  } else if (window.web3) {
    web3 = new Web3 (window.web3.currentProvider);
  } else {
    console.log (
      'Non-Ethereum browser detected. You should consider trying MetaMask!'
    );
    return;
  }

  inject ('web3', web3);

  if (web3! == null) {
    web3.eth.getAccounts ((error, accounts) => {
      if (error) return;
      let user_account = accounts [0];
      if (typeof user_account! =='undefined') {
        store.commit ('setAccount', user_account);
        web3.eth.getBalance (user_account, function (err, balance) {
          if (! err) {
            store.commit ('setBalance', balance);
          }
        });
      } else {
        alert ('Please log in');
      }
    });
  }
}
