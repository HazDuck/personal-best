const installToHomepage = () => {
  console.log('install to homepage running')
  let deferredPrompt;
  
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI notify the user they can install the PWA
    console.log(e, 'e')
    showInstallPromotion();
  });

  const buttonInstall = document.querySelector('[data-button-install]')
  console.log(deferredPrompt, 'deffered prompt')
  buttonInstall.addEventListener('click', (e) => {
    // Hide the app provided install promotion
    hideMyInstallPromotion();
    // Show the install prompt
    // deferredPrompt.prompt();
    // // Wait for the user to respond to the prompt
    // deferredPrompt.userChoice.then((choiceResult) => {
    //   if (choiceResult.outcome === 'accepted') {
    //     console.log('User accepted the install prompt');
    //   } else {
    //     console.log('User dismissed the install prompt');
    //   }
    // });
  });

  const showInstallPromotion = () => {
    buttonInstall.style.display = 'block'
  }
  
  const hideMyInstallPromotion = () => {
    buttonInstall.style.display = 'none'
  }
}


export { installToHomepage }
