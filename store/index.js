export const state = () => ({
  account:'',
  balance: 0
})

export const getters = {
  account: state => state.account,
  balance: state => state.balance
};

export const mutations = {
  setAccount (state, account) {
    state.account = account;
  },
  setBalance (state, balance) {
    state.balance = balance;
  }
};

export const actions = {};
