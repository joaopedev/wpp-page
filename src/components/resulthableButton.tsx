import styled, { keyframes } from "styled-components";
import { Button, Text } from "@chakra-ui/react";
import React from "react";

const breatheAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const BreathableButton = styled(Button)`
  animation: ${breatheAnimation} 2s ease-in-out infinite;
  padding: 10px 20px;
`;

const ButtonText = styled(Text)`
  font-size: 80%;
`;

const ResulthableButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <BreathableButton
      w="25%"
      colorScheme="green"
      onClick={onClick}
    >
      <ButtonText color="white" fontWeight="bold">
        QUERO VER O RESULTADO
      </ButtonText>
    </BreathableButton>
  );
};

export default ResulthableButton;