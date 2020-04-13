import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import "./styles/globalStyles";
import StyledPage, { Inner } from "./styles/PageStyles";
import Header from "../components/Header";
import Meta from "../components/Meta";

class Page extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
