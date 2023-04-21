import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
  box-sizing: border-box;
  padding: 0;
  width: 90%;
  height: 85px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  display: flex;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-bottom: 20px;
`;

const ButtonIcon = styled.div`
  padding-top: 5px;
`;

const ButtonText = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;

  color: #FFFFFF;
`;

function SidebarButton(props) {
  return (
    <>
      <Button>
        <ButtonIcon>
          {props.buttonIcon}
        </ButtonIcon>
        <ButtonText>{props.buttonText}</ButtonText>
      </Button>
    </>
  )
}

export default SidebarButton