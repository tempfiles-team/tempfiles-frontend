// import CheckIcon from '../../assets/CheckIcon.svg';

import { Checkbox } from '@/components/ui/checkbox';

type CheckBoxProps = {
  click: React.MouseEventHandler<HTMLDivElement>;
  isCheck: boolean;
  label: string;
};

export function CheckBox({ click, isCheck, label }: CheckBoxProps) {
  return (
    <div className="items-top flex space-x-2" onClick={click}>
      <Checkbox checked={isCheck} />
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {label}
      </label>
    </div>
  );
}
