# Redux Feedback Loop

### STEP 1: DATABASE

Create a database under the name of "prime_feedback"

```

Add some test data to ensure the POST is reflecting accurate information. Table should include ID, Feeling, Understanding, SUpport, Comments, Flagged & Date.

### STEP 2: GET FEEDBACK SETUP

Create a multi-part form that allows users to leave feedback for today. 
There will be 4 views for the form parts.
The parts:
- How are you feeling today?

- How well are you understanding the content?

- How well are you being supported?

- Any comments you want to leave?


While there is no nav bar, each part of the form should be at its own route. Clicking next should move the user to the appropriate step in the process as well as update the `Review` Component.


## STEP 3: REVIEW FOOTER

Have the footer of the page continually update itself with the values being submitted with the feedback.

## SUBMIT TO DATABASE

A final page will ask the user to review the information acquired. Once submitted, the database will recieve the information and a record of all feedback submitted can be viewed on a /admin page.