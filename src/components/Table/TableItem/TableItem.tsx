import React from 'react';
import styled from "styled-components";
import {TYPOGRAPHY} from "styles/presets/typography";
import {APPCOLORS} from "styles/presets/AppColors";
import {DayState} from "utils/type";
import {useOpeningHours} from "hooks";

interface TableItemProps {
    info: DayState;
    index: number;
}

export const TableItem: React.FC<TableItemProps> = ({info, index}) => {

    const currentDate = new Date().getDay()
    const openingHours = useOpeningHours(info)

    return (
        <Container>
            <Name>
                <NameInner>{info.day}</NameInner>
                {currentDate === index && <NameStatus>today</NameStatus>}
            </Name>
            {!info.value.length
                ? <Status>Closed</Status>
                : <OpeningTime>{openingHours.map((el, i) =>
                    <Time key={el.id}>
                        {
                            el.value.map((hours, index) =>
                                index === el.value.length - 1
                                    ? i !== openingHours.length - 1 ? hours.value + ", " : hours.value
                                    : hours.value + " - "
                            )
                        }
                    </Time>
                )}</OpeningTime>
            }
        </Container>
    );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 13px 0;
  border-bottom: 1px solid ${APPCOLORS.grey2};
`
const Name = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`
const NameInner = styled.p`
  ${TYPOGRAPHY.textBold};
  color: ${APPCOLORS.black};
  text-transform: capitalize;
`
const NameStatus = styled.p`
  ${TYPOGRAPHY.textAccent};
  color: ${APPCOLORS.accent};
  text-transform: uppercase;
`
const Status = styled.p`
  ${TYPOGRAPHY.textLight};
  color: ${APPCOLORS.grey3};
`
const OpeningTime = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: flex-end;
`
const Time = styled.p`
  ${TYPOGRAPHY.textBold};
  color: ${APPCOLORS.black};
  white-space: nowrap;
`
