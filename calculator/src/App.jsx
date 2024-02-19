import './App.css'

const numericButtonsClasses = 'btn btn-outline-info w-100'
const operatorsButtonsClasses = 'btn btn-outline-warning w-100'
const specialButtonsClasses = 'btn btn-outline-danger w-100'

function App() {
   return(
    <div>
      <h1>Calculator</h1>
      <hr />
      <table className='center'>
        <tbody>
          <tr>
            <td className='text-end' colSpan={4}>
              <h2>0</h2>
            </td>
          </tr>
          <tr>
            <td>
            <button
              className={operatorsButtonsClasses}
              type='button'>C</button>
            </td>
            <td>
            <button
              className={operatorsButtonsClasses}
              type='button'>{'<'}</button>
            </td>
            <td>
            <button
              className={operatorsButtonsClasses}
              type='button'>%</button>
            </td>
            <td>
            <button
              className={operatorsButtonsClasses}
              type='button'>/</button>
            </td>
          </tr>
          <tr>
            <td>
            <button
              className = {numericButtonsClasses}
              type='button'>7</button>
            </td>
            <td>
            <button
              className={numericButtonsClasses}
              type='button'>8</button>
            </td>
            <td>
            <button
              className={numericButtonsClasses}
              type='button'>9</button>
            </td>
            <td>
            <button
              className={operatorsButtonsClasses}
              type='button'>x</button>
            </td>
          </tr>
          <tr>
            <td>
            <button
              className={numericButtonsClasses}
              type='button'>4</button>
            </td>
            <td>
            <button
              className={numericButtonsClasses}
              type='button'>5</button>
            </td>
            <td>
            <button
              className={numericButtonsClasses}
              type='button'>6</button>
            </td>
            <td>
            <button
              className={operatorsButtonsClasses}
              type='button'>-</button>
            </td>
          </tr>
          <tr>
            <td>
            <button
              className={numericButtonsClasses}
              type='button'>1</button>
            </td>
            <td>
            <button
              className={numericButtonsClasses}
              type='button'>2</button>
            </td>
            <td>
            <button
              className={numericButtonsClasses}
              type='button'>3</button>
            </td>
            <td>
            <button
              className={operatorsButtonsClasses}
              type='button'>+</button>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button
              className={numericButtonsClasses}
              type='button'>0</button>
            </td>
            <td>
            <button
              className={numericButtonsClasses}
              type='button'>.</button>
            </td>
            <td>
            <button
              className={specialButtonsClasses}
              type='button'>=</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

   )
}

export default App
