
     /* Shows time! */
      function updateTime() {
         var current_time = new Date().toLocaleString();
        var timeText = document.querySelector("#timeElement");
        timeText.innerHTML = current_time
      }
      setInterval(updateTime,1000);

//  Alrighty, so this is the dragging code (got no idea how it works and im scared to do anythign with this, pray for me)
     


// Here where we put the initialization code for all windows, cuase im a bum at this
    
initializeWindow("welcome")
initializeWindow("NotesWindow")



// Acc drag code down here
    function dragElement(element) {

      var initialX = 0;
      var initialY = 0;
      var currentX = 0;
      var currentY = 0;

 
  if (document.getElementById(element.id + "header")) {
  
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
   
    element.onmousedown = startDragging;
  }

  
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    
    initialX = e.clientX;
    initialY = e.clientY;

    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
   
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;

    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
  
  
  //  So here im trying to get the welcome window to close at a lil button (or just general closing/opening business, that i could use for apps)
  var topBar = document.querySelector("#top")
// CLOSING WELCOME SCREEN
  var welcomeScreen = document.querySelector("#welcome")
  var welcomeScreenClose = document.querySelector("#welcomeClose")
  var welcomeScreenOpen = document.querySelector("#welcomeOpen")


  welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});

  
  function closeWindow(windowId) {
    var element = document.getElementById(windowId);
    element.style.display = "none";
  }

  function openWindow(windowId) {
    var element = document.getElementById(windowId);
    element.style.display = "flex";
    BiggestIndex++;
    element.style.zIndex = BiggestIndex;
    topBar.style.zIndex = BiggestIndex + 1;
}

//  MAKING THE WELCOME SCREEN CLOSE WHEN THE NOTES SCREEN COMES UP
var welcomeScreen = document.querySelector("#welcome")
var notesScreenClose = document.querySelector("#welcomeclose")

notesScreenClose.addEventListener("click", () => closeWindow(welcomeScreen));
  
// MAKING THE NOTES WINDOW CLOSE

var notesWindow = document.querySelector( "#NotesWindow")
var  notesWindowOpen = document.querySelector("#NotesOpen")
var noteswindowClose = document.querySelector("#NotesClose")

notesScreenClose.addEventListener("click", () => closeWindow(notesWindow));

//  selecting icons and things?
var SelectedIcon = undefined
    
   function selectIcon(element) {
    element.classList.add("selected")
    SelectedIcon = element

   }

   function stopSelectingIcon(element) {
    element.classList.remove("selected")
    SelectedIcon = undefined
   }

   function HandleIconTap(element) {

    if (element.classList.contains("selected")) {
        stopSelectingIcon(element)
        openWindow(window)


    } else {
        selectIcon(element)
    }
   }

   var BiggestIndex = 1

   function AddWindowTapHandling (element) {
    element.addEventListener( 'mousedown', () => handleWindowTap(element) )

   }

   function handleWindowTap(element) {
    BiggestIndex++;
    element.style.zIndex = BiggestIndex
    topBar.style.zIndex = BiggestIndex + 1;
     stopSelectingIcon(selectedIcon)
   }


  //   Giving all the windows, dragging, stacking and closing capabilities?
   function initializeWindow(elementName) {
  var screen = document.querySelector("#" + elementName)
  AddWindowTapHandling(screen)
 // makeClosable(elementName)
  dragElement(screen)

}