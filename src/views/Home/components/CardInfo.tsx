import React from 'react'
import { Card, CardBody, Heading, Text } from 'uikit'
import styled from 'styled-components'

const StyledCardInfo = styled(Card)`
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

const CardInfo = () => {
  return (
    <StyledCardInfo>
      <CardBody>
        <Heading size="xl" mb="24px">
        Information
        </Heading>
        <Row>
          <Text fontSize="16px"><li>Buyback and burn</li></Text>          
        </Row>
        <Row>
          <Text fontSize="16px"><li>No harvest lockup</li></Text>          
        </Row>
        <Row>
          <Text fontSize="16px"><li>Initial liquidity will be locked via deeplock.io</li></Text>             
        </Row>
        <Row>
        <Text bold style={{textAlign:"center",width:"100%"}}>
          <a href="https://deeplock.io/lock/0xfe4b89e5d0e27dee812b17f3848323716cb63d38" target="_blank" rel="noreferrer" style={{color:"rgb(77,147,232)"}}>PHOTON-BUSD LP Lock</a><br/>
          <a href="https://deeplock.io/lock/0xe8774c955c30bd869645e870ba82c0dcf89caa5e" target="_blank" rel="noreferrer" style={{color:"rgb(77,147,232)"}}>PHOTON-WBNB LP Lock</a>
        </Text>       
        </Row>
        <Row>
          <Text fontSize="16px"><li>Portion of deposit fees used for buybacks</li></Text>          
        </Row>
        <Row>
          <Text fontSize="16px"><li>No migrator code - <span style={{color:"rgb(77,147,232)"}}>we can&apos;t steal your LP!</span></li></Text>          
        </Row>
        <Row>
          <Text fontSize="16px"><li>24 hours timelock</li></Text>          
        </Row>
        <Row>
          {/* <Text fontSize="16px"><li>RugDoc review (soon)</li></Text> */}
        </Row>
        {/* <Row>
          <Text fontSize="16px">vfat.tools farming calculator (soon)</Text>
        </Row> */}
      </CardBody>
    </StyledCardInfo>
  )
}

export default CardInfo
