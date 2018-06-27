var randomPhrase = new Vue({
  el: '#app',
  data: {
    counter: 0,
    phrases: [
      {
        phrase: "M'aiq's father was also called M'aiq. As was M'aiq's father's father. At least, that's what his father said.",
        audio: "audio/Maiq_father.oga"
      },
      {
        phrase: "M'aiq wishes you well.",
        audio: "audio/Maiq_wish.oga"
      },
      {
        phrase: "M'aiq knows much, and tells some. M'aiq knows many things others do not.",
        audio: "audio/Maiq_know_3.oga"
      },
      {
        phrase: "M'aiq carries two weapons, to be safe. What if one breaks? That would be most unlucky.",
        audio: "audio/Maiq_carries_3.oga"
      },
      {
        phrase: "M'aiq is always in search of calipers, yet finds none. Where could they have gone?",
        audio: "audio/Maiq_is_always.oga"
      },
      {
        phrase: "M'aiq hears many stories of war... yet few of them are true.",
        audio: "audio/Maiq_hears.oga"
      },
      {
        phrase: "How does anyone know there was a city of Winterhold? M'aiq did not see it with his eyes. Did you?",
        audio: "audio/Maiq_how_does.oga"
      },
      {
        phrase: "Too much magic can be dangerous. M'aiq once had two spells and burned his sweetroll.",
        audio: "audio/Maiq_too_much.oga"
      }
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
      this.counter++
      if (this.counter > 4) {
        this.selectedPhrase = "M'aiq is tired now. Go bother somebody else.",
        this.selectedAudio = "audio/Maiq_is_tired.oga"
      }
      if (this.counter > 5) {
        this.selectedPhrase = "M'aiq is done talking.",
        this.selectedAudio = "audio/Maiq_is_done.oga"
      }
    }
  }
})
