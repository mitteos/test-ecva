import React from 'react';
import styled from "styled-components";
import {APPCOLORS} from "styles/presets/AppColors";
import {TableList} from "components/Table";

export const App: React.FC<{}> = () => {
    return (
        <Container>
            <TableList />
        </Container>
    );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${APPCOLORS.grey1};
`
