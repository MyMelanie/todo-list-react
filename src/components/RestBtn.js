
const RestBtn = ({resetTodos}) => {
    return (
        <>
          <button onClick={resetTodos} className='button-reset' title="reset todos">
            Reset todos
          </button>
        </>
    )
}

export default RestBtn