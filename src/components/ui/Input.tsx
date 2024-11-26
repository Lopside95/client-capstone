import "./Input.scss";

export type InputProps = {
  name: string;
  label?: string;
  placeholder?: string;
};

export const TextInput = ({ name, label, placeholder }: InputProps) => {
  return (
    <div className="input">
      <p className="input__label">{label}</p>
      <input className="input__comp" name={name} placeholder={placeholder} />
    </div>
  );
};
