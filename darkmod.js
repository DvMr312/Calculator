let Lightmod = false;

function changeDarkMod(){
    //Light mod
    if(Lightmod){
        Lightmod = false;
        document.documentElement.style.setProperty("--text-color", "black");
        document.documentElement.style.setProperty("--background-color", "#efe7e5");        
        document.getElementById("dark-light-mode").innerHTML = "Dark Mode";
    }
    else {
        //Dark Mod
        Lightmod = true;
        document.documentElement.style.setProperty("--text-color", "white");
        document.documentElement.style.setProperty("--background-color", "rgb(0, 0, 0)");
        document.getElementById("dark-light-mode").innerHTML = "Light Mode";

    }
}