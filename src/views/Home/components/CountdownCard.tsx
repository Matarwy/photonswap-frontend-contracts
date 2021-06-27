import React, {useState, useEffect} from 'react'
import { Card, CardBody, Heading, LinkExternal } from 'uikit'
import styled from 'styled-components'
import Countdown from 'react-countdown';
import useRefresh from 'hooks/useRefresh'
import {getLastestBlock} from '../../../utils/TimeHelper'

const StyledCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;
  text-align: center;
`

const StyleNumber = styled.span`
  font-size: 36px;
`

const StyledLink = styled(LinkExternal)`
  margin: auto;
  text-align: center;
`

const CountdownCard = () => {
    const [countdownTime, setCountdownTime] = useState(0)
    const [latestBlock, setLatestBlock] = useState(Number)
    const { fastRefresh } = useRefresh()
    const startBlock = 8555555

    useEffect(() => {
        const setBlock = async () => {
          const block = await getLastestBlock()
          setLatestBlock(block)
        }
        setBlock()
      }, [fastRefresh])
    
    useEffect(() => {
    const setTime = async () => {
        const time = await getCountdownTimeByBlock(latestBlock, startBlock, 3)
        setCountdownTime(time)
    }
    setTime()
    }, [startBlock, latestBlock])

    const getCountdownTimeByBlock = async(latestBlocks: number, endBlock: number, avgBlockTime: number) => {
        const periodBlock = endBlock - latestBlocks
        return periodBlock * avgBlockTime * 1000 * 1
    }

    const countDownRenderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return null;
        } 
        // Render a countdown
        return <Heading as="h1" size="lg">
            <Heading as="h1" size="xl" mb="12px">Farming Starts In</Heading>
            <StyledLink href="https://bscscan.com/block/countdown/8555555">BSC Countdown</StyledLink>
            <StyleNumber>{days}</StyleNumber> Days : <StyleNumber>{hours}</StyleNumber> Hours : <StyleNumber>{minutes}</StyleNumber> Minutes : <StyleNumber>{seconds}</StyleNumber> Seconds
        </Heading>;
        
    };

    return (
        latestBlock < startBlock?
        <>
        {countdownTime?
        <StyledCard>
            <CardBody>
                   
                <div><Countdown date={Date.now() + countdownTime} renderer={countDownRenderer} /></div>
                
            </CardBody>
        </StyledCard>
        :null}
        </>
        :
        null
    
    )
    
}

export default CountdownCard