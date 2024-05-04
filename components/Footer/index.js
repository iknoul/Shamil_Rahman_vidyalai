import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  // margin-top: 20px;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ccc;
  }
`;

const CompanyName = styled.div`
  margin-top: 20px;
`;

const Divider = styled.span`
  color: #777;
  margin: 0 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinks>
          <div>
            <FooterLink href={'/'}>Home</FooterLink>
            <Divider>|</Divider>
            <FooterLink href={'#'}>About</FooterLink>
            <Divider>|</Divider>
            <FooterLink href={'#'}>Services</FooterLink>
          </div>

          <CompanyName>© 2024 Vidyalai Interview Challenge</CompanyName>
          <div>
            <FooterLink href={'#'}>Contact</FooterLink>
            <Divider>|</Divider>
            <FooterLink href={'#'}>Privacy Policy</FooterLink>
            <Divider>|</Divider>
            <FooterLink href={'#'}>Terms of Service</FooterLink>
          </div>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
