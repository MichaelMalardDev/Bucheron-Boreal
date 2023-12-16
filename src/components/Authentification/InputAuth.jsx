
const InputAuth = ({ borderColor,placeholder, icon, type, change, value }) => {

  const styleBorder = {
    borderColor: borderColor,
  }

  return (
    <div
      style={styleBorder}
      className={`animate__animated animate__fadeInDown input-container flex items-center gap-4 ${
        type == "text" ? "pl-5 p-3 rounded-2xl" : "p-4"
      } rounded-3xl border-2`}>
      {icon != null ? <span className='text-2xl'>{icon}</span> : null}
      <input
        className='the-input w-full h-full'
        name='text'
        value={value}
        onChange={change}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};
export default InputAuth;
