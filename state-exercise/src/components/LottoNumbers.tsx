type Props = {
  generateNums: () => void
}

const LottoNumbers = ({generateNums}:Props) => {
  return  <button onClick={generateNums}>Generate Lotto Numbers</button>
}

export default LottoNumbers