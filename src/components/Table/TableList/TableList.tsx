import React from 'react';
import styled from "styled-components";
import {APPCOLORS} from "styles/presets/AppColors";
import {TableItem} from "components/Table/TableItem";
import ClockIcon from "assets/svg/time.svg";
import {TYPOGRAPHY} from "styles/presets/typography";
import {useDateParse} from "hooks";

export const TableList: React.FC<{}> = () => {

    const openingTime = useDateParse()

    return (
        <Container>
            <Header>
                <Clock src={ClockIcon}/>
                <Title>Opening hours</Title>
            </Header>
            <Separator />
            {openingTime.map(el =>
                <TableItem key={el.day} info={el} index={openingTime.indexOf(el) + 1} />
            )}
        </Container>
    );
};

const Container = styled.div`
  padding: 40px;
  border-radius: 17px;
  min-width: 410px;
  background: ${APPCOLORS.white};
  box-shadow: 2px 4px 8px 0px rgba(34, 60, 80, 0.2);
  @media (max-width: 470px) {
    min-width: auto;
    width: 95%;
  }
`
const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 0 0 15px;
`
const Clock = styled.img`
  width: 23px;
  height: 23px;
`
const Title = styled.h1`
  ${TYPOGRAPHY.heading};
  color: ${APPCOLORS.black};
  @media (max-width: 400px) {
    font-size: 24px;
  }
`
const Separator = styled.hr`
  width: 100%;
  background: ${APPCOLORS.black};
  height: 2px;
  margin: 0;
  border: none;
`
