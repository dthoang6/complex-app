import Search from "./modules/search";
import Chat from "./modules/chat";

//setup so that browsers that are not logged in cannot see the search icon
if (document.querySelector(".header-search-icon")) {
  //only if that element exists on the current page, then do this
  new Search();
}

if (document.querySelector("#chat-wrapper")) {
  //only if that element exists on the current page, then do this
  new Chat();
}
