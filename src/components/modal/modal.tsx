
import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import Success from "../../asserts/success.png";
import Galka from "../../asserts/galka.png";
import { useRef, useState } from "react";
 
import Voskl from "../../asserts/voskl.png";
import { Link, useNavigate } from 'react-router-dom';
import { useHistory } from '../../hooks/useHistory';
import { ModalButton, OverlayStylesModal, StyledModal, StyledModalElement } from './stylesModal';
export interface Props {
    setOnClose: React.Dispatch<React.SetStateAction<boolean>>,
    onClose: boolean,
  }
export default function Modal( {onClose, setOnClose}: Props) {
  const {arrayOfExpressions} =useHistory()
  console.log(arrayOfExpressions)
  const handleClick= ()=> {
    setOnClose(false)
  }
  if (!open) return null;
  const portalElement = document.getElementById('portal')
  return ReactDom.createPortal(
    <>
    {onClose && (
<>
      <StyledModal>
{arrayOfExpressions.map((item)=> (
  <StyledModalElement>
    {item}
  </StyledModalElement>
))}
<ModalButton onClick={handleClick}>
  Close history
</ModalButton>
    </StyledModal>
    <OverlayStylesModal>

    </OverlayStylesModal>
    </>
      )}
    </>,
    portalElement || document.body
  );
}