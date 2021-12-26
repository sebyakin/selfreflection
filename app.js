// прелоадер для всего

const content = document.querySelector('.content')

const button = document.querySelector('.button');
const analyse = document.getElementById('analyse');

const headline = document.querySelector('.headline');
const text = document.querySelector('.text');
const technical = document.querySelector('.technical');

const bit = document.querySelector('.bit');
const bits = document.querySelector('.bits');
const qr = document.querySelector('.qr');
const credits = document.querySelector('.credits');

const loading = document.querySelector('.preloader');
const jingle = new Audio('/assets/low-jingle.mp3');


window.addEventListener('load', () => { 

  console.log('(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧')
  
  // headline.classList.add('appearing')
  // text.classList.add('appearing')
  // technical.classList.add('appearing')


const phrases = [

  'You have a great need for other people to like and admire you.',

'You have a tendency to be critical of yourself.',

'You have a great deal of unused capacity which you have not turne]d to your advantage.',

'While you have some personality weaknesses, you are generally able to compensate for them.',

'Disciplined and self-controlled outside, you tend to be worrisome and insecure inside.',

'At times you have serious doubts as to whether you have made the right decision or done the right thing.',

'You prefer a certain amount of change and variety and become dissatisfied when hemmed in by restrictions and limitations.',

'You pride yourself as an independent thinker and do not accept others statements without satisfactory proof.',

'You have found it unwise to be too frank in revealing yourself to others.',

'At times you are extroverted, affable, sociable, while at other times you are introverted, wary, reserved.',

'Some of your aspirations tend to be pretty unrealistic.',

'Security is one of your major goals in life.',

'You like things we don’t understand',

'You are selfish but you are right',

'You can never be really happy because you know too much',

'Practice the radical way of forgetting in order to learn what is beautiful ',

'Let people know what you really feel', 

'The deeper you seek, the more is your wonder exiting',

'Remember an atom can collide in order to produce another matter.',

'You are doing what you were always to be doing.',

'Step into the spotlight, even you usually always shay away from it',

'Go to poetry not for wisdom, but for the dismantling of wisdom',

'Your ambitious tendencies are especially intense right now, verging on bossiness. ',

'Make use of your determination. Practice generosity.', 

'The only way to fight shy of criticism is to do nothing, say nothing, be nothing',

'Remember that habits, and not ideas, are the programming language of the human beings. ',

'Reinforce the habits you use to structure, contain and control the chaos of daily life ', 

'Right now the way you want to be appreciated and show appreciation is overly sentimental.', 

'Just because it is easier to tell a story about how people wound one another, doesn’t mean you should',

'Look out for a secret coming out, your intuition being shaky, or changes in how you think about your mental health.', 

'The situation will be an earning experience if you let it teach you',

'Your acquaintances and social connections demand considerable attention.', 

'If anything, too many people have access to your state of mind',

'Your intense tendencies are especially ardent right now, verging on brooding.', 

'Patina is an act of oxidation. It may be hard to accept the unconscious ways you grow and progress right now',

'If you are paying attention, you will detect challenges most profoundly in circumstances surrounding your identity',

'The point of the character is the process of building it',

'You have the choice to change in a way that aligns with who you really are and who you want to',

'Existence is just an endless array of phenomena: joy, pain, pleasure, there is no other truth',

'Balance delicacy and whims by thinking about the repercussions.', 

'You are moving quickly. Be careful with hearts.',

'Pay attention to your methods of inquiry',

'Ignorance is not endearing',

'Your relativist proclivities are impressive right now',

'Revenge exists on the same plane as justice — fantasy.',

'Your prevailing expansive tendencies are particularly productive right now',

'Fictitious good is a platitude',

'Real-life good is fresh and intoxicating. Your identity and ego are able to recognise this real-life good right now',

'Improving your relationship with your self-esteem can have a drastic effect on your life for the better',

'Your communication skills are especially acute right now',

'you’ll notice this sense of ease most intensely in situations having to do with habits, routine, and health',

'Your characteristic harmonious tendencies are particularly useful right now',

'There’s an influx of opportunity coming your way, it’s up to you to decide what’s worth keeping and what to pass up',

'Making trouble can be a reminder that you can also put things back in order',

'It’s a good time for indulgence.',

'Your diligent tendencies will be particularly useful right now',

'Pay attention to where you focus your time',

'Your emotional intensity is excessive right now',

'You control what you say but not what the other people hear',
]

  // setTimeout( () => {
  //   analyse.textContent = 'Your virtual identity is ready.'
  //   analyse.classList.remove('blink')
  //   button.classList.remove('hidden')    
  // }, 1000)


button.onclick = function() {

  text.remove();
  technical.remove();

  bits.classList.remove('hidden')
  qr.classList.remove('hidden')
  credits.classList.remove('hidden')

  

  bit.innerText = phrases[Math.floor(Math.random()*phrases.length)];

  setTimeout(function(){
    bit.classList.add('bit-visible') 

    setTimeout(function(){
      jingle.play();
    }, 1200) 

  }, 2000) 

  setTimeout(function(){
    bit.classList.remove('bit-visible')
  }, 7000) 

  const newPhrase = () => {
    bit.innerText = phrases[Math.floor(Math.random()*phrases.length)];
    bit.classList.add('bit-visible')  

    setTimeout(function(){
      jingle.play();
    }, 1200) 


    setTimeout(function(){
      bit.classList.remove('bit-visible')
    }, 7000) 
  }

  setInterval(newPhrase, 10000);








  // setTimeout(function(){
      
  // }, 1000)

    







}



})
// button.onclick = function() {

//   text.remove();
//   technical.remove();

//   bits.classList.remove('hidden')
//   qr.classList.remove('hidden')
//   credits.classList.remove('hidden')

//   const newPhrase = () => {
//     bit.innerText = phrases[Math.floor(Math.random()*phrases.length)]

//     setTimeout(function(){
//       bit.classList.add('bit-visible')
//     }, 1000)

//     setTimeout(function(){
//       bit.classList.remove('bit-visible')
//     }, 10000)     

//     setInterval(newPhrase, 12000);
//   }

// newPhrase()
// }





// const newBits = () => {

//   bit.innerText = phrases[Math.floor(Math.random()*bits.length)];

//   setTimeout(function(){
//       bit.classList.add('bit-visible')
//     }, 1000)

//   setTimeout(function(){
//       bit.classList.remove('bit-visible')
//       }, 14000)     

//   setTimeout(newBits(), 12000);
  
// }