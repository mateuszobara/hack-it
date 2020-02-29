export const forum = `<main class="forum">
<div class="forum__wrapper forum__wrapper--sign-up">
    <h1 class="forum__heading">CREATE ACCOUNT</h1>
    <p class="forum__description">Already have an account? <a href="#" class="forum__login">Log In here</a></p>
    <form action="#" class="form">
        <h2 class="form__heading">REGISTER</h2>
        <label for="name" class="form__info">User Name</label>
        <input type="text" class="form__item" id="name" required>
        <label for="email" class="form__info">Email</label>
        <input type="email" class="form__item" id="email" required>
        <label for="password" class="form__info">Password</label>
        <input type="password" class="form__item" id="password" required>
        <input type="submit" class="form__button" value="Register">
    </form>
</div>
<div class="forum__wrapper forum__wrapper--log-in">
    <h1 class="forum__heading">LOG IN</h1>
    <p class="forum__description">If you don't have an account yet <a href="#" class="forum__register">Sign Up here</a></p>
    <form action="#" class="form">
        <h2 class="form__heading">LOG IN</h2>
        <label for="email-login" class="form__info">Email</label>
        <input type="email" class="form__item" id="email-login" required>
        <label for="password-login" class="form__info">Password</label>
        <input type="password" class="form__item" id="password-login" required>
        <input type="submit" class="form__button" value="Login">
    </form>
</div>
</main>`