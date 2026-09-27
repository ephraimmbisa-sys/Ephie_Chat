const screens=["home","chats","create","jobs","profile"];
function navigate(id){
  screens.forEach(s=>document.getElementById(s).classList.toggle("active",s===id));
  document.querySelectorAll(".nav").forEach(n=>n.classList.toggle("active",n.dataset.screen===id));
  window.scrollTo({top:0,behavior:"smooth"});
}
function showToast(message){
  const t=document.getElementById("toast"); t.textContent=message; t.classList.add("show");
  clearTimeout(window.toastTimer); window.toastTimer=setTimeout(()=>t.classList.remove("show"),2600);
}
function openPostComposer(type=""){
  document.getElementById("composerModal").classList.add("show");
  document.getElementById("anonymousToggle").checked=type==="anonymous";
  document.getElementById("postText").placeholder=type==="anonymous"?"Share anonymously...":"What's happening?";
}
function closeModal(){document.getElementById("composerModal").classList.remove("show")}
function publishDemoPost(){
  const text=document.getElementById("postText").value.trim();
  if(!text){showToast("Write something before publishing.");return}
  const anonymous=document.getElementById("anonymousToggle").checked;
  closeModal(); document.getElementById("postText").value="";
  showToast(anonymous?"Anonymous post published (demo).":"Post published (demo).");
}
function likePost(btn){
  const span=btn.querySelector("span"); let n=parseInt(span.textContent,10)||0;
  if(!btn.dataset.liked){n++;btn.dataset.liked="1";btn.innerHTML="♥ <span>"+n+"</span>"}
}
function openChat(name){showToast("Opening chat with "+name+" — real-time messaging is next.")}


// Supabase connection
const SUPABASE_URL = "https://crbbkbnvyksakraryiqr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = sb_publishable_MSV02btrD_lKOfRN7Ksnpg_UzMxi9vC

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
