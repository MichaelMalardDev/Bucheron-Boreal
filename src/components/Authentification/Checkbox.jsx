import "./checkbox.css";




const Checkbox = ({borderColor, texte, clicFn}) => {
  
  const styleBorder = {
    borderColor: borderColor,
  }

  return (
    <>
      <div className='animate__animated animate__fadeInDown checkbox-wrapper-33 ml-4'>
        <label className='checkbox'>
          <input
            onClick={clicFn}
            type='checkbox'
            className='checkbox__trigger visuallyhidden'
          />
          <span style={styleBorder} className={`checkbox__symbol border-2`}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              version='1'
              viewBox='0 0 28 28'
              height='28px'
              width='28px'
              className='icon-checkbox'
              aria-hidden='true'>
              <path d='M4 14l8 7L24 7'></path>
            </svg>
          </span>
          <p>{texte}</p>
        </label>
      </div>
    </>
  );
};
export default Checkbox;
