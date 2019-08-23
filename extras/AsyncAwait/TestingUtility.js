const testUserForm = async () => {

    const loadUserForm = new Promise((resolve, reject) => {
        setTimeout(() => resolve('page loaded'), 3000);
    });

    const enterUserName = new Promise((resolve, reject) => {
        setTimeout(() => resolve('user entered'), 3000);
    });

    const verifyUserDetails = () => {
        // Verifying user details
    }

    await loadUserForm;
    await enterUserName;
    const testResult = verifyUserDetails();

    return testResult;
}