import styled from "styled-components";

const Logo = styled.h1`
  position: relative;
  z-index: 2;
  margin-left: 2rem;
  font-size: 4rem;
  transform: skew(-7deg);

  a {
    padding: 0.5rem 1rem;
    color: ${(props) => props.theme.white};
    text-transform: uppercase;
    text-decoration: none;
    background: ${(props) => props.theme.red};
  }

  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
  .bar {
    border-bottom: 1px solid ${(props) => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;

    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${(props) => props.theme.lightGrey};
  }
`;

export default StyledHeader;
export { Logo };
