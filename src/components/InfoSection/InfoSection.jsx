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
    lightTopLine, 
    lightTextDesc, 
    buttonLabel, 
    description, 
    headline,
    lightText,
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
                                    <TopLine lightTopLine={lightTopLine}>
                                        {topLine}
                                    </TopLine>
                                    <Heading lightText={lightText}>
                                        {headline}
                                    </Heading>
                                    <Subtitle lightTextDesc={lightTextDesc}>
                                        {description}
                                    </Subtitle>
                                    <Link to='/Contact'>
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