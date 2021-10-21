import { BigNumber } from 'ethers'
import React, { useState, useEffect } from 'react'

import { CG_ETH_PRICE_URL } from 'utils/constants/constants'
import PricesContext from './PricesContext'

const PricesProvider: React.FC = ({ children }) => {
  const [ethereumPrice, setEthereumPrice] = useState<BigNumber>(
    BigNumber.from(0)
  )

  // get ETH price in USD
  useEffect(() => {
    fetch(CG_ETH_PRICE_URL)
      .then((response) => response.json())
      .then((response) => {
        setEthereumPrice(BigNumber.from(response?.ethereum?.usd))
      })
      .catch((error) => console.log(error))
  }, [ethereumPrice])

  return (
    <PricesContext.Provider
      value={{
        ethereumPrice,
      }}
    >
      {children}
    </PricesContext.Provider>
  )
}

export default PricesProvider
