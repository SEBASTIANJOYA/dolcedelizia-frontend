 const redireccionar=()=>{
    var hora=new Date();
    var fechas= hora.getTime()-Date.parse(localStorage.getItem('date'));
    fechas=fechas/60000;

    if(Math.round(fechas)>=30){
        
        localStorage.removeItem("type_user");
        localStorage.removeItem("user");
        localStorage.removeItem("date");
        localStorage.removeItem("users");
        
        
        window.location.href="./homedolcedelizia";



        return true;
        
        
    }

    return false;



}
export default redireccionar;