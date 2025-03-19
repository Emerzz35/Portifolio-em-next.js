import Image from 'next/image';
import CustomButtom from  "@/app/components/Custombutton"

const Contato = () => {
  return (
<CustomButtom>
    <Image 
            src="/alterdata-logo.png" 
            alt="Logo da Alterdata"
            width={100}
            height={20}
            className="w-auto h-5 md:h-6 mx-1"
          />
    PHP
</CustomButtom>
  );
};

export default Contato;
