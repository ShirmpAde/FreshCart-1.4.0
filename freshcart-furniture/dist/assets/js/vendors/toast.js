let toastTrigger=document.getElementById("liveToastBtn"),toastLiveExample=document.getElementById("liveToast");if(toastTrigger){let t=bootstrap.Toast.getOrCreateInstance(toastLiveExample);toastTrigger.addEventListener("click",()=>{t.show()})}