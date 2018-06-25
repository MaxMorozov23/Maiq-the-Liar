var randomPhrase = new Vue({
  el: '#app',
  data: {
    counter: 0,
    phrases: [
      {
        phrase: "M’aiq's father was also called M'aiq. As was M'aiq's father's father. At least, that's what his father said.",
        audio: "audio/Maiq_father.oga"
      },
      {
        phrase: "M’aiq wishes you well.",
        audio: "audio/Maiq_wish.oga"
      },
      {
        phrase: "M’aiq knows much, and tells some. M'aiq knows many things others do not.",
        audio: "audio/Maiq_know_3.oga"
      }
      // "M’aiq wishes you well.",
      // "M’aiq knows much, and tells some. M'aiq knows many things others do not.",
      // "M’aiq carries two weapons, to be safe. What if one breaks? That would be most unlucky.",
      // "Feet are for walking. Hands are for hitting. Or shaking. Or waving. Sometimes for clapping.",
      // "I do not wish to fight on horseback. It is a good way to ruin a perfectly good horse... which is, to say, a perfectly good dinner.",
      // "I don't know why one would want to destroy a building. It takes time to make it. Much time."
    ],
    selectedPhrase: '',
    selectedAudio: ''
  },
  methods: {
    newPhrase: function () {
      const randomNumber = Math.floor(Math.random() * this.phrases.length)
      const notRandomNumber = randomNumber;
      this.selectedPhrase = this.phrases[randomNumber].phrase
      this.selectedAudio = this.phrases[notRandomNumber].audio
      this.counter++;
      if (this.counter > 4) {
        this.selectedPhrase = "M'aiq is tired now. Go bother somebody else.",
        this.selectedAudio = "audio/Maiq_is_tired.oga"
      }
    }
  }
})
