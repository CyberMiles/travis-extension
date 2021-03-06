const {
  ROPSTEN,
  RINKEBY,
  KOVAN,
  MAINNET,
  ROPSTEN_CODE,
  RINKEYBY_CODE,
  KOVAN_CODE,
  ROPSTEN_DISPLAY_NAME,
  RINKEBY_DISPLAY_NAME,
  KOVAN_DISPLAY_NAME,
  MAINNET_DISPLAY_NAME,
  STAGING,
  TESTNET,
  MAINNET2,
  STAGING_CODE,
  TESTNET_CODE,
  MAINNET2_CODE,
  STAGING_DISPLAY_NAME,
  TESTNET_DISPLAY_NAME,
  MAINNET2_DISPLAY_NAME,
} = require('./enums')

const networkToNameMap = {
  [ROPSTEN]: ROPSTEN_DISPLAY_NAME,
  [RINKEBY]: RINKEBY_DISPLAY_NAME,
  [KOVAN]: KOVAN_DISPLAY_NAME,
  [MAINNET]: MAINNET_DISPLAY_NAME,
  [ROPSTEN_CODE]: ROPSTEN_DISPLAY_NAME,
  [RINKEYBY_CODE]: RINKEBY_DISPLAY_NAME,
  [KOVAN_CODE]: KOVAN_DISPLAY_NAME,
  [STAGING]: STAGING_DISPLAY_NAME,
  [TESTNET]: TESTNET_DISPLAY_NAME,
  [MAINNET2]: MAINNET2_DISPLAY_NAME,
  [STAGING_CODE]: STAGING_DISPLAY_NAME,
  [TESTNET_CODE]: TESTNET_DISPLAY_NAME,
  [MAINNET2_CODE]: MAINNET2_DISPLAY_NAME,
}

const getNetworkDisplayName = key => networkToNameMap[key]

module.exports = {
  getNetworkDisplayName,
}
