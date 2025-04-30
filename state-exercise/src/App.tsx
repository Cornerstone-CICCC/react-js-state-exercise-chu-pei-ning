import { useState } from 'react'
import LightToggle from './components/LightToggle';
import LottoNumbers from './components/LottoNumbers';
import ClickCounter from './components/ClickCounter';
import './App.css'

function App() {
  const [isDark, setIsDark] = useState<boolean>(false)
  const [lottoNumbers, setLottoNumbers] = useState<number[]>([])
  const [count, setCount] = useState(0)


  const handleLightToggle = () => {
    setIsDark((prev) => !prev)
  }

  const handleClickLottoNumbers = () => {
    const numbers = new Set<number>();

    while (numbers.size < 7) {
      const num = Math.floor(Math.random() * (50)) + 1;
      numbers.add(num);
    }
    setLottoNumbers(Array.from(numbers))
  }

  const handleCountTimes = () => {
    setCount((prev) => prev +1 )
  }

  return (
    <div>
      <h2>Light Toggle</h2>
      <LightToggle setIsDark={handleLightToggle} />
      <div  
        style={{
        backgroundColor: isDark ? '#555' : 'white',
        color: isDark ? 'white' : 'black',
        padding: 20,
        gap: 10 }}>
        Change this background color using the style attribute
      </div>

      <h2>Lotto Numbers</h2>
      <LottoNumbers generateNums={handleClickLottoNumbers}/>
      <div className="output">{lottoNumbers.join('  ')}</div>

      <h2>Click Counter</h2>
      <ClickCounter onCounting={handleCountTimes}/>
      <div className="output">{count}</div>
    </div>
  )
}

export default App
