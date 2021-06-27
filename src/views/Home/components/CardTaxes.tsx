import React from 'react'
import { Card, CardBody, Heading, Text } from 'uikit'
import styled from 'styled-components'

const StyledCardTaxes = styled(Card)`
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

const CardTaxes = () => {
  return (
    <StyledCardTaxes>
      <CardBody>
        <Heading size="xl" mb="24px">
        Launch
        </Heading>
        <Row>
          <Text fontSize="16px" bold>Farming start block 8555555</Text>          
        </Row>
        <Row>
          <Text fontSize="16px" bold >Antiwhale enabled (Max 0.5% of supply per TX)</Text>          
        </Row>
        <Row>
          <Text fontSize="16px"><li>Transfer tax 5%</li></Text>          
        </Row>
        <Row>
          <Text fontSize="16px"><li>4% to liquidity</li></Text>          
        </Row>
        <Row>
          <Text fontSize="16px"><li>1% burned forever</li></Text>            
        </Row>
        {/* <Row>
          <Text fontSize="16px">vfat.tools farming calculator (soon)</Text>
        </Row> */}
      </CardBody>
    </StyledCardTaxes>
  )
}

export default CardTaxes
