import React from "react";
import styled from "styled-components/macro";
import {
  Color,
  mixinFontParams,
  mixinFontFamily,
} from "../../styles/style_constants";

const DateNow = () => {
  const date = new Date();
  let dayWeek = date.getDay();
  let dayNum = date.getDate();
  let month = date.getMonth();

  const monthRus = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  const weekdayRus = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  return (
    <DateStyled>
      {weekdayRus[dayWeek]}, {dayNum} {monthRus[month]}
    </DateStyled>
  );
};

const DateStyled = styled.div`
  width: 27.33vw;
  text-align: center;
  color: ${Color.body_text};
  ${mixinFontFamily("Roboto")}
  ${mixinFontParams({ size: "1.8rem" })}
`;

export default DateNow;
