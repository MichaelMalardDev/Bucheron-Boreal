import { IoClose } from 'react-icons/io5';

const ItemFacture = ({ name, price, nb, image }) => {
    return (
        <div className="animate__animated animate__fadeInLeft flex flex-col relative justify-center gap-5 rounded-xl p-3 mt-10 items-center bg-perso-beige">
            <img className='absolute -top-12 w-1/4 '  src={`/src/assets/img/PNG/${image}`} alt="" />
            <span className='self-start border border-white rounded-full p-0.5  text-white bg-perso-rouge text-xl'>
                <IoClose />
            </span>
            <h2 className='font-generalsans'>{name}</h2>
            <div className='flex self-end items-end gap-3 font-generalsans'>
                <p className='text-gray-500'>{nb}x</p>
                <h2 className='text-xl'>{price}$</h2>
            </div>
        </div>
    );
}
export default ItemFacture;