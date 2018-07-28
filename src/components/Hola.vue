<template lang="pug">
.container
  .modal(:class="[isActive ? 'is-active' : '']")
    .modal-background
    .modal-content
      .card
        .card-content 
          .field
            p.control.has-icons-left
              input.input(type="email", placeholder="Email")
              span.icon.is-small.is-left
                font-awesome-icon(icon="envelope")
          .field
            p.control.has-icons-left
              input.input(type="password", placeholder="Password")
              span.icon.is-small.is-left
                font-awesome-icon(:icon="['fab', 'keycdn']")
          .field
            p.control
              a.button.is-success(@click="modal") 
                span.icon
                  font-awesome-icon(:icon="['fab', 'github']")
                span Login
    button.modal-close.is-large(@click="modal",
                                aria-label="close",
                                )

  .container
    .columns
      .column.is-4.is-offset-4 
        .card
          .card-content 
            .field
              p.control.has-icons-left
                input.input(type="email", placeholder="Email")
                span.icon.is-small.is-left
                  font-awesome-icon(icon="envelope")
            .field
              p.control.has-icons-left
                input.input(type="password", placeholder="Password")
                span.icon.is-small.is-left
                  font-awesome-icon(:icon="['fab', 'keycdn']")
            .field
              p.control
                a.button.is-success(@click="modal") 
                  span.icon
                    font-awesome-icon(:icon="['fab', 'github']")
                  span Login
    .container
      .column.is-4.is-offset-4
        h2 fontawesome layers
        font-awesome-layers(full-width, class="fa-5x")
          font-awesome-icon(icon="calendar")
          font-awesome-layers-text.fa-inverse(transform="down-3 shrink-8",
                                              :value="number")
        button.button.is-primary.is-large(@click="change")
          span.icon.is-small.is-left
            font-awesome-icon.fa-2x(:icon="['fab', 'mailchimp']")

      
</template>
<script>
import { refdB } from "@/firebase";
import firebase from "firebase";
export default {
  data() {
    return {
      email: "eduard@gmail.com",
      pass: "1234",
      number: 1,
      isActive: false
    };
  },
  firebase: {
    refdB
  },
  methods: {
    create() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.pass)
        .catch(error => {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == "auth/weak-password") {
            alert(errorMessage);
          } else {
            alert("The password is too weak.");
          }
          console.log(error);
        });
    },
    change() {
      this.number += 1;
    },
    modal() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="scss" scope>
.container {
  margin-top: 25px;
}
</style>