import React from 'react';
import styled from 'styled-components';

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET THE DISNEY BUNDLE</SignUp>
        <Description>Stream now. <Terms href="#">Terms apply</Terms></Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
        <Subscription><Subscribe href="#">Sign up for Disney+ only.</Subscribe><Rate>$7.99/month or $79.99/year</Rate></Subscription>
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    opacity: 0.7;
  }

`

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`

const CTALogoOne = styled.img`
`

const SignUp = styled.a` 
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;


  &:hover {
    background: #0483ee;

  }
`
const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
  color: #aaa;
`

const CTALogoTwo = styled.img` 
  width: 90%;
`

const Terms = styled.a`
  color: white;
`

const Subscription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

const Subscribe = styled.a`
  margin-bottom: 2px;
  color: white;
`

const Rate = styled.div`
  color: #aaa;
`