const RangeeOver = ({titre, argent}) => {
    return (
        <div className={`animate__animated animate__fadeInUp animate__delay-1s animate__duration-5s flex justify-between font-generalsans ${titre === "Grand total" ? "text-2xl" : "text-xl"}  w-full`}>
            <h2>{titre}</h2>
            <h2 className={titre === "Grand total" ? "text-2xl" : null}>{argent}$</h2>
        </div>
    );
}
export default RangeeOver;