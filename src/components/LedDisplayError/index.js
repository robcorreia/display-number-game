import ReactLEDDisplay from "../LedDisplay";

const LedDisplayError = () => {
  return (
    <>
      <ReactLEDDisplay
        displayValue="5"
        width="32"
        ledSize="2"
        foregroundCol="lightgreen"
        backgroundCol="darkgreen"
        skew="-7"
      />
      <ReactLEDDisplay
        displayValue="0"
        width="32"
        ledSize="2"
        foregroundCol="lightgreen"
        backgroundCol="darkgreen"
        skew="-7"
      />
      <ReactLEDDisplay
        displayValue="2"
        width="32"
        ledSize="2"
        foregroundCol="lightgreen"
        backgroundCol="darkgreen"
        skew="-7"
      />
    </>
  );
};

export default LedDisplayError;
