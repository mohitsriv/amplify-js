export default class AuthError extends Error {
    message: string;
    suggestion: string;
    cause: Error;
    constructor(message: string, suggestion: string) {
        super(message);
        this.message = message;
        this.suggestion = suggestion;
    }

    /**
     * Create Error
     * @param {String} key - The key for the message and suggestion
     * @param {Error} cause - Root cause of the error (if applicable)
     * @return {AuthError} A new AuthError object with the member variables defined
    */
    static createError(key: string, cause: Error = null) {
        const err = new AuthError(this.getMessage(key),this.getSuggestion(key));
        err.cause = cause;
        return err;
    }

    /**
     * Get Message
     * @param {String} messageKey - The key to retrieve the message
     * @return {String} The corresponding message
    */
    static getMessage(messageKey: string) {
        const messages = {
            noUserPool: "It looks like your Cognito UserPool is null",
            nullParams: "It looks like params is not a valid string or object",
            noUsername: "Username cannot be empty",
            noPassword: "Password cannot be empty",
            noCode: "Code cannot be empty",
            noValidMfa: "It looks like there wasn't a valid MFA method provided",
            noChallengeResponse: "A challenge response was not provided",
            noCurrentUser: "It looks like the current user in your Cognito UserPool is null"
        };
        return messages[messageKey];
    }

    /**
     * Get Suggestion
     * @param {String} suggestionKey - The key to retrieve the suggestion
     * @return {String} The corresponding suggestion
    */
    static getSuggestion(suggestionKey: string) {
        const suggestions = {
            noUserPool: "Please make sure you see the line \"'aws_user_pools': 'enable'\" in your aws-exports file",
            nullParams: "The first parameter should either be non-null string or object",
            noUsername: "Enter a username",
            noPassword: "Enter a password",
            noCode: "Enter the verification code sent to you",
            noValidMfa: "Choose a valid MFA option: TOTP, SMS, or no MFA",
            noChallengeResponse: "Please provide a challenge response",
            noCurrentUser: "Make sure a user is signed in"
        };
        return suggestions[suggestionKey];
    }
}

/* 
const errors = {
    signUp186: "No userPool",
    signUp211: "The first parameter should either be non-null string or object",
    signUp214: "Username cannot be empty",
    signUp215: "Password cannot be empty",
    confirmSignUp242: "No userPool",
    confirmSignUp243: "Username cannot be empty",
    confirmSignUp244: "Code cannot be empty",
    resendSignUp263: "No userPool",
    resendSignUp264: "Username cannot be empty",
    signIn281: "No userPool",
    signIn282: "Username cannot be empty",
    setPreferredMFA447: "no validmfa method provided",
    confirmSignIn575: "Code cannot be empty",
    completeNewPassword609: "Password cannot be empty",
    sendCustomChallengeAnswer655: "No userPool",
    sendCustomChallengeAnswer656: "Challenge response cannot be empty",
    currentUserPoolUser739: "No userPool",
    currentUserPoolUser745: "No current user in userPool",
    currentUserPoolUser754: "No current user in userPool",
    getSyncedUser771: "No userPool",
    currentAuthenticatedUser800: "not authenticated",
    currentSession822: "No userPool",
    currentSession827: "No current user",
    currentSession835: "No current user",
    verifyUserAttributeSubmit949: "Code cannot be empty",
    forgotPassword1048: "No userPool",
    forgotPassword1049: "Username cannot be empty",
    forgotPasswordSubmit1078: "No userPool",
    forgotPasswordSubmit1079: "Username cannot be empty",
    forgotPasswordSubmit1080: "Code cannot be empty",
    forgotPasswordSubmit1081: "Password cannot be empty"
};
*/
