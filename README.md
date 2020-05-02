# ducks

### auth/ session
* an (optional) requirement is for a user to be able to schedule the same feeding on a future date. ideally these entries should be inserted not when they're scheduled but when the current time has passed the time the user scheduled it. but I will probably just insert when scheduled with the time constraint.
I would need to have session state / login to do this.
1. user logs in with username/pw:
2. if they authenticate successfully:
      * set a state hook for the user's id in the session
      * when feedings are entered, add the userid to the feeding object
3. unauthenticated users don't need to have an id?