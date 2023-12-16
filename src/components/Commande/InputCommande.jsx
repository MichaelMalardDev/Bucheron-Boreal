


const InputCommande = ({ placeholder, type, delay, change, value }) => {
  const ligneStyle = {
    borderWidth: "1.5px",
  };
  return (
    <>
      <div
        style={ligneStyle}
        className={`animate__animated animate__fadeInDown animate__delay-${delay}s input-container flex items-center gap-4 p-4 rounded-2xl border-perso-vertFonce relative mt-8`}>
        <label
          className='absolute -top-7 left-6'
          htmlFor={placeholder}>
          {placeholder}
        </label>
        <input
          value={value}
          onChange={change}
          className='w-full h-full'
          name='text'
          type={type}
        />
      </div>
    </>
  );
};
export default InputCommande;
