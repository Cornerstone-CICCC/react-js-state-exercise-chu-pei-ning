
type Props = {
  setIsDark: () => void
}

const  LightToggle = ({setIsDark}: Props) => {
  return <button onClick={setIsDark}>Toggle Lights</button>
}

export default LightToggle
