const Button = ({text,color,children}) => {

  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  }

  const onMouseEnterButton = () => {
    console.log(`{text}에서 MouseEnter 이벤트 발생`);
  }

  return <button
    // 이벤트 핸들러 
    // onMouseEnter={onMouseEnterButton}
    onClick={onClickButton}
  style={{color:color}}
  >
    {text} - {color.toUpperCase()}
    {children}
  </button>;
};

Button.defaultProps = {
  color: "black",
};

export default Button;