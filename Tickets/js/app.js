const app = new Vue({
  el: '#app',
  data: {
    firstName: 'First',
    lastName: 'Last',
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
        } else {
          return this.firstName || this.lastName;
        }
      },
      set: function() {
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
    formIsValid: function() {
      return this.firstName && this.lastName && this.email && this.purchaseAgreementSigned;
    },
    submitButtonColor: function() {
  		if (this.formIsValid) {
    		return '#4c7ef3';
      }
      return 'gray';
		},
    submitButtonCursor: function() {
  		if (this.formIsValid) {
    		return 'pointer';
  		} else {
    		return 'default';
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
    },
    submitForm: function() {
      //
    }
  },
  watch: {
    specialRequests: function(newRequests, oldRequests) {
      if (newRequests.toLowerCase().includes('vegan') ||
          newRequests.toLowerCase().includes('vegetarian')) {
        this.ticketType = 'vip';
      }
    }
  }
});
