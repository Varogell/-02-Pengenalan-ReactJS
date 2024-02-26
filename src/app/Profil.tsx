import Foto from  "/public/foto.jpg"
import Image from "next/image"
const user = {
    name: 'Alvaro Hegel Ianka',
    nim:'2141720237',
    imageUrl: Foto,
    imageSize: 300,
  };
  
  export default function Profile() {
    return (
        <div className='text-center'>
        <Image
            className="avatar rounded-full mx-auto mt-5"
            src={user.imageUrl}
            alt={'Foto ' + user.name}
            width={ user.imageSize }
            height={ user.imageSize } />
        <h1 className='mt-10 text-4xl font-bold'>{user.name}</h1>
        <h2 className='mt-10 text-4xl font-bold'>{user.nim}</h2>
    </div>
    );
  }