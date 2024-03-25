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
  font-size: 16px; /* Tamanho padrão do texto */

  /* Media query para dispositivos de tela menores */
  @media screen and (max-width: 768px) {
    font-size: 14px; /* Tamanho do texto para telas menores */
  }

  /* Media query para dispositivos de tela ainda menores */
  @media screen and (max-width: 480px) {
    font-size: 12px; /* Tamanho do texto para telas ainda menores */
  }
`;

const ResulthableButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <BreathableButton colorScheme="green" onClick={onClick} p={3}>
      <ButtonText color="white" p={3} fontWeight="bold">
        QUERO VER O RESULTADO
      </ButtonText>
    </BreathableButton>
  );
};

export default ResulthableButton;