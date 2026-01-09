function openService(id){
document.querySelectorAll('.service-detail').forEach(s=>s.style.display='none');
document.getElementById(id).style.display='block';
}
function sendWhatsApp(service){
const phone='254702514363';
const msg='SERVICE REQUESTED: '+service;
window.open('https://wa.me/'+phone+'?text='+encodeURIComponent(msg),'_blank');
}
