import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from '../../globalStyles'
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
} from './InfoSection.elements'

const InfoSection = ({ 
    primary,
    ligthBg, 
    imgStart, 
    ligthTopLine, 
    ligthtTextDesc, 
    buttonLabel, 
    description, 
    headline,
    ligthtText,
    topLine,
    img,
    alt,
    start
}) => {
    return (
        <>
            <InfoSec ligthBg={ligthBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TextWrapper>
                                    <TopLine ligthtTopLine={ligthTopLine}>
                                        {topLine}
                                    </TopLine>
                                    <Heading ligthtText={ligthtText}>
                                        {headline}
                                    </Heading>
                                    <Subtitle ligthtTextDesc={ligthtTextDesc}>
                                        {description}
                                    </Subtitle>
                                    <Link to='/blog'>
                                        <Button big fontBig primary={primary}>
                                            {buttonLabel}
                                        </Button>
                                    </Link>
                                </TextWrapper>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection