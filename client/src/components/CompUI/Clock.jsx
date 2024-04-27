import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import {
  Color,
  mixinFontParams,
  mixinFontFamily,
} from "../../styles/style_constants";

const Clock = () => {
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setClock(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <ClockStyled>{clock.toLocaleTimeString()}</ClockStyled>;
};

const ClockStyled = styled.time`
  width: 27.33vw;
  text-align: right;
  color: ${Color.body_text};
  ${mixinFontFamily("Roboto")}
  ${mixinFontParams({ size: "2.2rem", weight: 600 })}
`;

export default Clock;
