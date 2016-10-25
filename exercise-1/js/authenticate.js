// JavaScript authentication file
$(function() {

    // Initialize Firebase
	  var config = {
		apiKey: "AIzaSyBqO5NtLrynSOu9zY81exhFMFL5DA_25r4",
		authDomain: "fir-auth-39a06.firebaseapp.com",
		databaseURL: "https://fir-auth-39a06.firebaseio.com",
		storageBucket: "fir-auth-39a06.appspot.com",
		messagingSenderId: "162982805073"
	  };
	  firebase.initializeApp(config);
	  
	  
    // Sign Up: Function to create account on firebase, then redirect to index.html
    var signUp = function() {
        // Get email, password, and display name
		var email = $('#email').val();
		var pass = $('#password').val();
		var displayName = $('#display-name').val();
		
		console.log(email);
		console.log(pass);
		console.log(displayName);
        // Create user, then set the user's display name
		firebase.auth().createUserWithEmailAndPassword(email, pass).then(function(user) {
			user.updateProfile({
				displayName: displayName
			}).then(function(){
				window.location = 'index.html';
			})
		}).catch(function(error) {
			alert(error.message);
		});
                // Set display name

    };

    // SignIn: Function to authenticate on Firebase, then redirect to index.html
    var signIn = function() {
        // Get email and password


        // Authenticate using email and password, then redirect

    };

    // Sign out: Function to log a user out of firebase
    var signOut = function() {
        // Sign out, then redirect



    };

    // Assign event lister to form submission
	$("form").on('submit', function() {
		event.preventDefault();
		if(this.id == 'sign-up') {
			signUp();
		} else {
			signIn();
		}
	});


    // Assign click event to logout button



    // Authentication Change: see if a user is already signed in, and redirect

            // Rediriect to index.html if there is a user and the pathname isn't '/'

            // Redirect to sign-in if there is NOT a user and the pathname IS '/'

});
