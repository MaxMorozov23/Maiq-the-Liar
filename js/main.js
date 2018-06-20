var randomPhrase = new Vue({
  el: '#app',
  data: {
    counter: 0,
    phrases: [
      'М’Айк устал. Приставай к кому-нибудь другому.',
      'М’Айк ищет коловианский меховой шлем. Практичный и стильный. М’Айк очень опечален, что у него нет такого шлема.',
      'М’Айк хотел бы иметь рыбную палочку, чтобы подарить ее тебе. К сожалению, у него ее нет.',
      'М’Айк верит, что дети наше будущее. Но он не хочет, чтобы они портили нам удовольствие.'

    ],
    selectedPhrase: ''
  },
  methods: {
    newPhrase: function () {
      const randomNumber = Math.floor(Math.random() * this.phrases.length)
      this.selectedPhrase = this.phrases[randomNumber]
    }
  }
})
