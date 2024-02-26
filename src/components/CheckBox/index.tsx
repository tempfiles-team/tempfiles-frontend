// import CheckIcon from '../../assets/CheckIcon.svg';

import { Checkbox } from '@/components/ui/checkbox';

type CheckBoxProps = {
  click: React.MouseEventHandler<HTMLDivElement>;
  isCheck: boolean;
  label: string;
  disabled?: boolean;
};

export function CheckBox({ click, isCheck, label, disabled }: CheckBoxProps) {
  return (
    <div className="items-top flex space-x-2" onClick={disabled ? () => {} : click}>
      <Checkbox checked={isCheck} disabled={disabled} />
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {label}
      </label>
    </div>
  );
}
