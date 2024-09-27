import Image from 'next/image';

const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={`flex justify-center items-center gap-2 ${className}`}>
            <Image src='/images/logo.svg' alt='logo' width={25} height={25} />
            <span className='font-bold text-3xl tracking-tighter'>Comet</span>
        </div>
    );
};

export default Logo;
