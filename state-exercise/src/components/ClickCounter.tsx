type Props = {
  onCounting: () => void
}

const ClickCounter = ({onCounting}: Props) => {
  return <button onClick={onCounting}>Counting times</button>
}

export default ClickCounter