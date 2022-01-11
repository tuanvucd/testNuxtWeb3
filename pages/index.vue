<template>
  <div>
    <div> account: {{account}} </div>
    <div> balance: {{balance}} </div>
    <button @click = "send"> Send Ether </button>
  </div>
</template>

<script>
export default {
  computed: {
    account () {
      return this.$store.getters ['account'];
    },
    balance () {
      return this.$store.getters ['balance'];
    }
  },
  methods: {
    send () {
    //   if (this.$web3 === undefined) return;
    //   console.log (this.$web3);
    //
    //   this.$web3.eth
    //     .sendTransaction ({
    //       from: this.account,
    //       to: '0x0C6390A4F8bE143d3905aFA1BcCcacC44f335794',
    //       value: 10
    //   })
    // .on ('receipt', console.log);
    }
  }
};
</script>
