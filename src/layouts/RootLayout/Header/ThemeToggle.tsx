import styled from "@emotion/styled"
import React from "react"
import useScheme from "src/hooks/useScheme"
import { CiLight, CiDark } from "react-icons/ci";

type Props = {}

const ThemeToggle: React.FC<Props> = () => {
  const [scheme, setScheme] = useScheme()

  const handleClick = () => {
    setScheme(scheme === "light" ? "dark" : "light")
  }

  return (
    <StyledWrapper onClick={handleClick}>
      {scheme === "light" ? <CiLight className="icon" /> : <CiDark className="icon" />}
    </StyledWrapper>
  )
}

export default ThemeToggle

const StyledWrapper = styled.div`
  cursor: pointer;
`
