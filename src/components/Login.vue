<template lang="pug">
  .container
    .columns
      .column.is-4.is-offset-4
        .card
          .card-header
            p.card-header-title.is-centered THUNDER
          .card-content 
            .field
              p.control.has-icons-left
                input.input(type="email",
                            placeholder="Email",
                            v-model="email")
                span.icon.is-small.is-left
                  font-awesome-icon(icon="envelope")
            .field
              p.control.has-icons-left
                input.input(type="password", 
                            placeholder="Password",
                            v-model="pass")
                span.icon.is-small.is-left
                  font-awesome-icon(:icon="['fab', 'keycdn']")
            .columns
              .column.is-4.is-offset-4
                .field
                  p.control
                    a.button.is-success(@click="logIn",:class="[!isLoading ? '' : 'is-loading']") 
                      span.icon
                        font-awesome-icon(:icon="['fab', 'github']")
                      span Login
            .field
              p.control {{token}}
    .container
      .column.is-4.is-offset-4
        h2 fontawesome layers
        font-awesome-layers(full-width, class="fa-5x")
          font-awesome-icon(icon="calendar")
          font-awesome-layers-text.fa-inverse(transform="down-3 shrink-8",
                                              :value="number")
        button.button.is-primary.is-large(@click="logOut")
          span.icon.is-small.is-left
            font-awesome-icon.fa-2x(:icon="['fab', 'mailchimp']")
        button.button.is-primary.is-large(@click="change")
          span.icon.is-small.is-left
            font-awesome-icon.fa-2x(:icon="['fab', 'github']") 
</template>
<script>
import { refdB } from "@/firebase";
import firebase from "firebase";
export default {
  data() {
    return {
      email: "",
      pass: "",
      token: "",
      number: 1,
      isActive: false,
      isLog: true,
      isLoading: false
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
      console.log(this.isLog);
    },
    modal() {
      this.isActive = !this.isActive;
    },
    logIn() {
      this.isLoading = true;
      if (this.isLog) {
        firebase
          .auth()
          .setPersistence(firebase.auth.Auth.Persistence.SESSION)
          .then(() => {
            return firebase
              .auth()
              .signInWithEmailAndPassword(this.email, this.pass)
              .then(() => {
                this.isLog = false;
                this.isLoading = false;
                var getToken = JSON.parse(
                  window.sessionStorage.getItem(window.sessionStorage.key(0))
                );
                this.token = getToken.uid;
                sessionStorage.token = getToken.uid;
              });
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    logOut() {
      firebase
        .auth()
        .signOut()
    }
  }
};
</script>

<style lang="scss" scope>
.container {
  margin-top: 150px;
}
</style>