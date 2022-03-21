import { StepButton } from "../stepButton/StepButton";
import "./ButtonGroup.scss";


export const ButtonGroup = ({
  onNext,
  onBack,
}: {
  onNext: () => any;
  onBack: () => any;
}) => {
  return (
    <div className="button-group">
      <StepButton type="primary-button" title="BACK" onClick={onBack} />
      <StepButton type="secondary-button" title="NEXT" onClick={onNext} />
    </div>
  );
};
