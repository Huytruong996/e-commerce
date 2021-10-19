import React, { useEffect, useMemo, useState } from "react";
import {
  CountDown,
  CountDownAmount,
  CountDownPeriod,
  CountDownRow,
  CountDownSection,
  CountDownWrapper,
  OfferText,
} from "./CountDown.elements";
import moment, { duration } from "moment";
import momentDurationFormatSetup from "moment-duration-format";

const CountDownComponent = ({ thenVal }) => {
  momentDurationFormatSetup(moment);
  const initialCountDown = {
    days: "-",
    hours: "-",
    minutes: "-",
    seconds: "-",
  };
  const then = useMemo(() => {
    return moment(thenVal, "YYYY-MM-DD HH:mm:ss");
  }, [thenVal]);

  const [countDown, setCoutDown] = useState(initialCountDown);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const clockDuration = duration(then.diff(now)).format("DD HH:mm:ss");

      let indexCount = clockDuration.split(" ").length;
      if (indexCount > 1) {
        indexCount = 0;
      } else {
        indexCount = -1;
      }
      const days = clockDuration.split(" ")[indexCount] || "-";
      const time = clockDuration.split(" ")[indexCount + 1].split(":");
      const hours = time[0] || "-";
      const minutes = time[1] || "-";
      const seconds = time[2] || "-";

      setCoutDown({ days, hours, minutes, seconds });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [then]);

  return (
    <CountDownWrapper>
      <OfferText>Hurry Up! Offer ends in</OfferText>
      <CountDown>
        <CountDownRow>
          <CountDownSection>
            <CountDownAmount>{countDown.days}</CountDownAmount>
            <CountDownPeriod>Days</CountDownPeriod>
          </CountDownSection>
          <CountDownSection>
            <CountDownAmount>{countDown.hours}</CountDownAmount>
            <CountDownPeriod>Hour</CountDownPeriod>
          </CountDownSection>
          <CountDownSection>
            <CountDownAmount>{countDown.minutes}</CountDownAmount>
            <CountDownPeriod>Minutes</CountDownPeriod>
          </CountDownSection>
          <CountDownSection>
            <CountDownAmount>{countDown.seconds}</CountDownAmount>
            <CountDownPeriod>Seconds</CountDownPeriod>
          </CountDownSection>
        </CountDownRow>
      </CountDown>
    </CountDownWrapper>
  );
};

export default CountDownComponent;
