import React,{useRef,useState} from 'react';
import emailjs from '@emailjs/browser';


const Contact: React.FC = () => {
    const form = useRef();
    const[modal,setModal]=useState(false);

    const toggleModal=()=>{
      setModal(!modal)
    }
    
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mj7mol4', 'template_znimdxp', form.current, {
        publicKey: 'D0kJS0J7sijaoYi9O',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contact" className="p-8">
        <div className='grid place-items-center'>

      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className='m-4'>Feel free to Contact me by submitting the form below and I will get back to you as 
      soon as possible</p>
        </div>
        <div className='grid place-items-center p-7 w-auto '>
        <form className="space-y-4 p-3 ms-10 w-96" ref={form} onSubmit={sendEmail}>
        
        <input type="text" placeholder="Enter Your Name" className="w-full p-2 border rounded" name="user_name" />
        <input type="email" placeholder="Enter Your Email" className="w-full p-2 border rounded"  name="user_email"/>
        <textarea placeholder="Enter Your Message" className="w-full p-2 border rounded" name="message" ></textarea>
        {modal && (
        <div className="modal">
          <div onClick={toggleModal} ></div>
          <div >
            <h2 className='text-green-400'>your mail get submitted</h2>
            {/* <button className="" onClick={toggleModal}>
              CLOSE
            </button> */}
          </div>
        </div>
      )}
        <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded  hover:bg-blue-100 hover:text-black" value="Send" onClick={toggleModal}>Submit</button>
       
      </form>
        </div>
      
    </section>
  );
};

export default Contact;
