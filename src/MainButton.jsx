const MainButton = (props) => {
  return <button style={{
  padding: '0.325rem 1rem',
  border: 'none',
  borderRadius: props.borderRadius,
  backgroundColor: props.backgroundColor,
  color: props.color,
  fontFamily: "Poppins",
  cursor: 'pointer'
  }} onClick={props.handleTask}>{props.text}</button>
}

export default MainButton;