import Step from "components/Step";

export default function StepList(props) {
  const steps = props.steps.map((step, i) => <Step key={i} text={step.text} />);

  return <ul>{steps}</ul>;
}
