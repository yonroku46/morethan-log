import styled from "@emotion/styled"
import Link from "next/link"

const NavBar: React.FC = () => {
  return (
    <StyledWrapper className="">
      <ul>
        <li>
          <Link href={"/about"}>
            About
          </Link>
        </li>
      </ul>
    </StyledWrapper>
  )
}

export default NavBar

const StyledWrapper = styled.div`
  flex-shrink: 0;
  ul {
    display: flex;
    flex-direction: row;
    li {
      display: block;
      margin-left: 1rem;
      color: ${({ theme }) => theme.colors.gray11};
    }
  }
`
