import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import Todos from "./Todos"

const ModalStyle = styled.div`
  color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 5px rgb(255 255 255 / 20%);
  width: 90%;
  margin: 0 auto 20px;
  background: rgba(255, 255, 255, 0.2);
`

const BackButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
`

const BackIcon = styled.span`
  background-color: #5dd9a7;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  color: #f8f8ff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  font-size: 10px;
  &:hover {
    transform: scale(1.2);
  }
`

const Modal = ({ data, setShowModal }) => {
  return (
    <ModalStyle className="Modal">
      <Todos data={data} />
      <BackButton
        onClick={() => {
          setShowModal(false)
        }}
      >
        <BackIcon>
          <FontAwesomeIcon icon={faArrowLeft} />
        </BackIcon>
        Back to all Lists
      </BackButton>
    </ModalStyle>
  )
}

export default Modal
