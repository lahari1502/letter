import React from 'react';
import p1 from './assets/pi.jpeg';
import p2 from './assets/p2.jpeg';
import p3 from './assets/p3.jpeg';
import p4 from './assets/p4.jpeg';




function LoveLetter() {
  const images = [p1, p2, p3,p4];

  const createHearts = () => {
    const heartCount = 50; // Increased number of hearts
    for (let i = 0; i < heartCount; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
      document.body.appendChild(heart);

      heart.addEventListener('animationend', () => {
        heart.remove();
      });
    }
  };

  return (
    <div className='bg-red-300 max-h' >
    <div className="relative max-w mx-24 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">My Dearest Kalyan,</h2>
      <p className="text-xl text-gray-700 mb-6">
        I love you ra bujji kanna i really love you i know that 
        I can never miss you, nor would I ever want to. 
        You are not just the best possession I have; 
        you are the best thing that has ever happened to me. 
        My heart beats for you alone, and I cherish every second we share.
        Even in your absence, I feel your presence all around me, and it brings me comfort.
        I am never ever leaving youuuu. 
        Kanna nen ninu kalisina moment nunchi anni gurthu techukunte nak 
        ipatki chala magical ga anipisthundi mana antha magical ga 
        evru undaru kanna.Every moment nak most precious ana mata ardam ayinda 
        idi just china gift ok na nuve ekuva alochinchaku idi ayithe irigipodu padavadu
        epatki ilane untadi anduke i just wanted to make you feel special
        aa pics antava i just wanted to feel the happiness we had at that  moment kanna we have so much ahead ok na 
        inka chal unayi manam chudalsinavi inka eno edurkovali enno chudali 
        kanna i want you to be the one beside fighting them ok na?
        i really treasure you so much nen nuv lekunda oka second kuda ohinchalenu kanna nijnga
        nen ayithe fix ayanu kanna nuvey lubu ani nuv no ana kuda nen ne venakalaney osthan emo 
        nen nuv odilesthey undalenu chudu amma kuda ninu entha ba chuskuntundo nak nuv na gundekayi anthe i love you Mr.KALYAN
      </p>

      {/* Displaying images */}
      <div className="grid grid-cols-2 justify-center ">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={` ${index + 1}`}
            className="w-64 h-64 object-cover my-5 mx-2" // Customize styles as needed
          />
        ))}
      </div>
      <p className='text-xl font-sans my-8'>
        nek idey happiness life long kavali ante kinda una love button ni nokku ok na ?
        ayina nuv nokuthav ani nak telsu raa buddiiii bangaramuuuuuuuuuuuuuuuu ummmahhhhhhhh i love youuuu
      </p>

      <button
        className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
        onClick={createHearts}
      >
       love
      </button>

      <style jsx>{`
        .heart {
          position: absolute;
          bottom: 0;
          width: 40px; /* Increased size of hearts */
          height: 40px; /* Increased size of hearts */
          background-color: red;
          transform: rotate(45deg);
          opacity: 0.8;
          animation-name: float;
          animation-fill-mode: forwards;
          animation-timing-function: linear;
        }

        .heart::before,
        .heart::after {
          content: '';
          position: absolute;
          width: 40px; /* Increased size of hearts */
          height: 40px; /* Increased size of hearts */
          background-color: red;
          border-radius: 50%;
        }

        .heart::before {
          top: -20px; /* Adjusted for larger hearts */
          left: 0;
        }

        .heart::after {
          left: 20px; /* Adjusted for larger hearts */
          top: 0;
        }

        @keyframes float {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100vh) scale(0.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
    </div>
  );
}

export default LoveLetter;
