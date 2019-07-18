const app = new Vue({
  el: '#app',
  data: {
    firstName: '',
    lastName: '',
    email: '',
    ticketQuantity: 1,
    ticketType: 'general',
    referrals: [],
    specialRequests: '',
    purchaseAgreementSigned: false
  },
  computed: {
    fullName: {
      get: function() {
        if (this.firstName && this.lastName) {
          return `${this.firstName} ${this.lastName}`;
        }
        return this.firstName || this.lastName;
      },
      set: function(newFullName) {
        const names = newFullName.split(' ');

        if (names.length >= 2) {
          this.firstName = names[0];
          this.lastName = names[names.length - 1];
        }

        if (names.length <= 1) {
          this.firstName = names[0] || '';
          this.lastName = '';
        }
      }
    },
    ticketDescription: function() {
      let readableTicketType = 'General Admission';
      if (this.ticketType === 'vip') {
        readableTicketType = 'VIP';
      }

      let ticketPluralization = 'tickets';
      if (this.ticketQuantity === 1) {
        ticketPluralization = 'ticket';
      }

      return `${this.ticketQuantity} ${readableTicketType} ${ticketPluralization}`;
    },
    emailIsValid: function() {
      return this.email.includes('@');
    },
    formIsValid: function() {
      return this.firstName && this.lastName && this.emailIsValid && this.purchaseAgreementSigned;
    },
    submitButtonStyles: function() {
  		if (this.formIsValid) {
        return {
          'background-color': '#4c7ef3',
          'cursor': 'pointer'
        }
      }
      return {
        'background-color': 'gray',
        'cursor': 'default'
      }
    },
    touchedEmailStyles: function() {
      if (this.email) {
        return {
          'border-color': '#bdbcbc',
          'border-width': '2px'
        }
      }
      return {
        'border-color': '#e0e0e0',
        'border-width': '2px'
      }
    },
    invalidEmailStyles: function() {
      if (this.email && !this.emailIsValid) {
        return {
          'background-color': '#ffeded',
          'border-color': '#da5252'
        }
      }
    }
  },
  watch: {
    specialRequests: function(newRequests) {
      if (newRequests.toLowerCase().includes('vegan') ||
          newRequests.toLowerCase().includes('vegetarian')) {
        this.ticketType = 'vip';
      }
    }
  },
  methods: {
    resetFields: function() {
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.ticketQuantity = 1;
      this.ticketType = 'general';
      this.referrals = [];
      this.specialRequests = '';
      this.purchaseAgreementSigned = false;
    }
  }
});
