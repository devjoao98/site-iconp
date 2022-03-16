import React from 'react'
import { FaFacebook, FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa'

import { Button } from '../../globalStyles'
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink


} from './Footer.elements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterSubscription>
            <FooterSubHeading>
                Join our exclusive membership to receive the latest news and trends
            </FooterSubHeading>
            <FooterSubText>
                You can unsubscribe at any time.
            </FooterSubText>
            <Form>
                <FormInput name='email' type='email' placeholder='Your Email' />
                <Button fontBig>Subscribe</Button>
            </Form>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <SocialIcon>ICONP</SocialIcon>
                    </SocialLogo>
                    <WebsiteRights> © ICONP - 2022 Desenvolvido por HS SOLUTIONS</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' arial-label='Facebook'>
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' arial-label='Instagram'>
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' arial-label='Twitter'>
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' arial-label='Github'>
                            <FaGithub />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterSubscription>
    </FooterContainer>
  )
}

export default Footer