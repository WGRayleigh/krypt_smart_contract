//https://eth-ropsten.alchemyapi.io/v2/AK4kOpZGQkNlhPj_vuvn1O5l5ACqYuZE

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity : '0.8.0',
  networks:{
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/AK4kOpZGQkNlhPj_vuvn1O5l5ACqYuZE',
      accounts: ['ca515e7dda828db20a8ac748d5520512041404e8b009168df0c0d1b4f7e93f90']
    }
  }
}