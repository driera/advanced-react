import styled from "styled-components";

const StyledPage = styled.div`
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

export default StyledPage;
export { Inner };
