import ResetIcon from '@components/icons/ResetIcon';

interface ResetButtonProps {
  handleClick: () => void;
}

const ResetButton = ({ handleClick }: ResetButtonProps) => (
  <button className="text-white" onClick={handleClick}>
    <ResetIcon />
    reset
  </button>
);

export default ResetButton;
