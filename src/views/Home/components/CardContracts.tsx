import React from 'react'
import { Card, CardBody, Heading, Text } from 'uikit'
import styled from 'styled-components'

const StyledCardContracts = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CardContracts = () => {
  return (
    <StyledCardContracts>
      <CardBody>
        <Heading size="xl" mb="24px">
          Contracts
        </Heading>
        <Row>
          <Text fontSize="16px" bold>Contracts</Text>          
        </Row>
        <Row>
          <Text fontSize="16px"><li>Token address:</li>
          <a href="https://bscscan.com/token/0x10a96eaecdf605a5e682bfcd2278ca7cc682eb84" target="_blank" rel="noreferrer" style={{color:"rgb(77,147,232)"}}>0x10a96eaecdf605a5e682bfcd2278ca7cc682eb84</a>
          </Text>          
        </Row>
        <Row>
          <Text fontSize="16px"><li>MasterChef:</li>
          <a href="https://bscscan.com/address/0xa6441dc44d002c20a5e3bb400197fa6e6ea2f17d" target="_blank" rel="noreferrer" style={{color:"rgb(77,147,232)"}}>0xa6441dc44d002c20a5e3bb400197fa6e6ea2f17d</a>
          </Text>          
        </Row>
        <Row>
          <Text fontSize="16px"><li>TimeLock:</li>
          <a href="https://bscscan.com/address/0xbf157374d1565cb7ef5c9386db81f960876d0a8a" target="_blank" rel="noreferrer" style={{color:"rgb(77,147,232)"}}>0xbf157374d1565cb7ef5c9386db81f960876d0a8a</a>
          </Text>          
        </Row>
      </CardBody>
    </StyledCardContracts>
  )
}

export default CardContracts
