import styled from "styled-components";
const ErrorText = styled.p`
  color: red;
  margin: 0;
  padding: 2px 0;
  font-size: 11px;
`;

const InputLabel = styled.p`
  color: #000;
  margin: 0;
  padding: 2px 0;

  font-size: 11px;
  font-weight: 600;
`;

const InputContainer = styled.div`
  margin-bottom: 12px;
`;

const InputView = ({
  type = "text",
  onInputChange,
  placeholder,
  errMsg,
  name,
  hasError,
  label,
  disabled = false,
  value,
  readOnly = false,
}) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <input
        type={type}
        disabled={disabled}
        onChange={onInputChange}
        placeholder={placeholder}
        name={name}
        value={value}
        readOnly={readOnly}
      />
      {hasError && <ErrorText>{errMsg}</ErrorText>}
    </InputContainer>
  );
};
export default InputView;